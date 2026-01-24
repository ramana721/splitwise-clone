import React from 'react'
import { Link } from 'react-router-dom'

import styles from './SignupForm.module.css'
import { spliwisebrandsvglight } from '../../assets/svgs'
function SignupForm() {
    return (
        <>
            <div className={styles.mainForm}>
                <form action="/signup" method="post">

                    {/* <h4 className="text-md-center">Split-wise clone</h4> */}

                    <div className="d-flex ">
                        <div className="form-group py-2 mx-1">
                            <label>First Name</label>
                            <input type="text" name="firstname" className="form-control" />
                        </div>
                        <div className="form-group py-2 mx-1">
                            <label>Last Name</label>
                            <input type="text" name="lastname" className="form-control" />
                        </div>

                    </div>
                    <div className="form-group py-2">
                        <label>Email address</label>
                        <input type="email" name="email" className="form-control" />
                    </div>


                    <div className="form-group py-2">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" />
                    </div>

                    <div className="form-group form-check">
                        <input type="checkbox" name="remember" className="form-check-input" />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <label>Have a good day :)</label>
                            <Link to='/login' className="text-white">Login Back</Link>
                        </div>

                    </div>

                    <div className="text-end py-4">
                        <button type="submit" className={`btn ${styles.btnPrimary}`}>Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignupForm
