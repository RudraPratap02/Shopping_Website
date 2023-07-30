import React, { useState } from 'react'
import './LogIn.css'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function LogIn() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const signIn = e => {
        e.preventDefault();

        //some fancy firebase things
        signInWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                console.log(auth);
                const mail = auth.user.email;
                if(mail) history("/");
            })
            .catch(error => alert(error.message))
    };

    const register = e =>{
        e.preventDefault();

        //Do some fancy firebase register stuff
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                // it successfully registered a new user with email and password

                if(auth) {
                    history('/');
                }

            })
            .catch(error => alert(error.message))
    };

  return (
    <div className='login'>
        <Link to="/">
            <img 
                className='login_logo'
                src= 'https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png'
                alt=''
            />
        </Link>

        <div className='login_container'>
            <h1>Sign-in</h1>
            <form>
                <h4>E-mail</h4>
                <input 
                    type='text' 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <h4>Password</h4>
                <input 
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button type='submit' className='login_signInButton' onClick={signIn}>Sign In</button>
            </form>

            <p>
                By Signing-in you agree to the Amazon Clone conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button type='submt' className='login_registerButton' onClick={register}>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default LogIn;