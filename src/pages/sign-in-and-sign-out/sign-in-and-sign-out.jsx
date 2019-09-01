import React from 'react';
import SignIn from '../../components/SignIn/sign-in'
import SignUp from '../../components/sign-up/sign-up'
import './sign-in-and-sign-out.scss'


const SignInSignOut = ()=>(
    <div className='sign-in-and-sign-out'>
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
)

export default SignInSignOut;