import React from 'react'
import { Link } from 'react-router-dom'
import styles from './LoginForm.module.css'
import { spliwisebrandsvglight } from '../../assets/svgs'
function LoginForm() {
    return (
        <>
            <div className={styles.mainForm}>
              
                <form action="/login" method="post">
                    <div className="form-group py-2">
                        <label>Email address</label>
                        <input type="email" name="email" className="form-control" />
                    </div>

                    <div className="form-group py-2">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" />
                    </div>

                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <label>Remember me</label>
                            <Link to="/signup" className="text-white">Sign Up</Link>
                            
                        </div>

                    </div>

                    <div className="text-end py-4">
                        <button type="submit" className={`btn ${styles.btnPrimary}`}>Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginForm
