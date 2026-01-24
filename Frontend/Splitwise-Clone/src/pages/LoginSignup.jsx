import React from 'react'
import './LoginSignup.css'
function loginSignup() {
  return (
    <>
        <div className="row p-0 m-0">
        <div className="col-8 background-container p-0"></div>

        <div className="col-4 d-flex align-items-center">
            <div className="form-div d-flex align-items-center justify-content-center">

                 {/* BACKGROUND CURVE SVG  */}
                <svg id="randomCurveSVG">
                    <path id="curvePath" fill="none" stroke="gold" strokeWidth="3"
                          strokeLinecap="round" />
                    <circle id="animateDot" r="0"></circle>

                   {/* Motion animation (path set by JS)  */}
                    <animateMotion id="dotMotion" dur="3s" fill="freeze"></animateMotion>
                </svg>

                <div className="main-form">
                    <form action="/login" method="post">
                        <h4 className="text-md-center">Split-wise clone</h4>

                        <div className="form-group py-2">
                            <label>Email address</label>
                            <input type="email" name="email" className="form-control"/>
                        </div>

                        <div className="form-group py-2">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control"/>
                        </div>

                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input"/>
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <label>Remember me</label>
                                <a href="/signup" className="text-white">Sign Up</a>
                            </div>
                            
                        </div>

                        <div className="text-end py-4">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default loginSignup