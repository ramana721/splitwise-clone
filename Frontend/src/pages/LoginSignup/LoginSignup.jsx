import React from 'react'
import styles from './LoginSignup.module.css'
import LoginForm from '../../components/LoginForm'
import SignupForm from '../../components/SignupForm'
import { loginbg, spliwisebrandsvglight } from '../../assets/svgs'

function LoginSignup({type}) {
    return (
        <>
            <div className="row p-0 m-0">
                <div className={`${styles.backgroundContainer} col-8 p-0`} style={{backgroundImage:`url(${loginbg})`}}></div>

                <div className="col-4 d-flex align-items-center">
                    <div className={`${styles.formDiv} d-flex align-items-center justify-content-center flex-column`}>
                    <div className='text-center'>
                            <img src={spliwisebrandsvglight} alt="Splitwise Logo" className={`${styles.imgFit} ${type==="login"?"mb-5":"mb-3"} text-center`} />
                    </div>
                        {/* BACKGROUND CURVE SVG 
                        <svg id="randomCurveSVG">
                            <path id="curvePath" fill="none" stroke="gold" strokeWidth="3"
                                strokeLinecap="round" />
                            <circle id="animateDot" r="0"></circle>

                            Motion animation (path set by JS) 
                            <animateMotion id="dotMotion" dur="3s" fill="freeze"></animateMotion>
                        </svg> */}
                        

                        {type==="login"?<LoginForm/>:<SignupForm/>}

                    </div>
                </div>
            </div>


        </>
    )
}

export default LoginSignup;