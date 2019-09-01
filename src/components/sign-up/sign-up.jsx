import React from 'react';
import FormInput from '../form/form-component'
import CustomButton from '../custom-button/custom-button'

import {auth, createUserProfileDocument} from "../../firebase/firebase-util";
import './sign-up.styles.scss'

class signUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        
        if (password!= confirmPassword){
            alert("password don't match");
            return ;
        }
        
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password);

           await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:"",
                email:"",
                password:"",
                confirmPassword:""
                }
            )
            
        }catch (e) {
            console.error(e)
        }

    };

    handleChange = async event =>{
        const {name,value} = event.target;

        this.setState({[name]:value});

    };
    render() {
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I don't have account</h2>
                <span> Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='displayName'
                        required
                   />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='confirmPassword'
                        required
                    />

                    <CustomButton type='submit'> Sign Up</CustomButton>



                </form>
            </div>
        )
    }
}

export default signUp;