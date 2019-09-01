import React from 'react';
import './form-input.styles.scss';
import FormInput from '../form/form-component'
import CustomButton from '../custom-button/custom-button'
import {signInWithGoogle,auth} from '../../firebase/firebase-util'

class sign_in extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            email : "",
            password:""

        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email,password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                password:"",
                email:""
            })

        }catch (e) {
            e.error()
        }

    };
    handleChange = event =>{
        const {value,name}=event.target;
        this.setState({[name]:value})
    }

    render() {
        return(
            <div className='sign-in'>

                <h2>
                    I already have account
                </h2>
                <span>
                    Sign in with your password and email
                </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange}  label='email' required/>
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='password' required/>
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIN>
                            {' '}
                            Sign in with Google{' '}
                        </CustomButton>
                    </div>


                </form>

            </div>
        )
    }

}

export default sign_in;
