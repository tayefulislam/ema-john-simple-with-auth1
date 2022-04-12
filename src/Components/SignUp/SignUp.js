// import { faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init.js'

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleEmailBlur = event => { setEmail(event.target.value); };

    const handlePasswordBlur = event => { setPassword(event.target.value); };

    const handleConfirmPasswordBlur = event => { setConfirmPassword(event.target.value); };

    if (user) {
        navigate('/')
    }


    const handleCreateUser = (event) => {

        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Password and Confirm password did not match")
            return;
        }

        else {
            createUserWithEmailAndPassword(email, password)

        }


    }








    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>SignUP !!</h1>

                <form onSubmit={handleCreateUser}>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />

                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>

                    <p style={{ color: 'red' }}>{error}</p>

                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>Already have an account?<Link className='form-link' to="/login">Login</Link></p>




            </div>

        </div>
    );
};

export default SignUp;