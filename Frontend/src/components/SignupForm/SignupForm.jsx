import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './SignupForm.module.css';
import { googleLogo } from '../../assets/svgs';
import { signup } from '../../services/auth';
// import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google'
function SignupForm() {
    const navigate = useNavigate();
    const responseGoolge = async (authResult) => {
        try {
            //call api from using recieved code
            if(authResult?.code){

                console.log(authResult);
            }

        } catch (error) {
            console.log('On requesting google code', error);
        }
        
    }
    const googleLogin = useGoogleLogin({
        onSuccess: responseGoolge,
        onError: responseGoolge,
        'flow': 'auth-code'
    });
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        remember: false
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const res = await signup(form);
            if (res?.success) {
                setTimeout(() => {
                    navigate('/login');

                }, 1000);
            }
            console.log('Signup success:', res);
        } catch (err) {
            console.error('Signup failed:', err);
        }
    };

    return (
        <div className={styles.mainForm}>
            <form onSubmit={handleSubmit}>
                <div className="d-flex">
                    <div className="form-group py-2 mx-1">
                        <label>First Name</label>
                        <input
                            type="text"
                            name="firstname"
                            className="form-control"
                            value={form.firstname}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group py-2 mx-1">
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="lastname"
                            className="form-control"
                            value={form.lastname}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group py-2">
                    <label>Email address</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group py-2">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={form.password}
                        onChange={handleChange}
                    />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <label>Have a good day :)</label>
                    <Link to="/login" className="text-white">
                        Login Back
                    </Link>
                </div>


                <div className="text-end py-4">
                    <button type="submit" className={`btn ${styles.btnPrimary}`}>
                        Sign Up
                    </button>
                </div>

                <div className="form-group d-flex justify-content-center py-2">
                    <button type="button" onClick={googleLogin} className={`btn ${styles.googleBtnStyle}`}>
                        <img
                            src={googleLogo}
                            className={styles.googleLogo}
                            alt="Google"
                        />
                        Sign up with Google
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignupForm;
