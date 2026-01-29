import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({isLoggedin}) {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 py-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Splitwise</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {console.log(isLoggedin)}
                        {isLoggedin ? (
                        <>
                            <li>
                                <Link className="nav-link" aria-current="page" to="/dashboard">Home</Link>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    
                                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        My profile
                                    </button>
                                

                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <Link className="dropdown-item" aria-current="page" to="/account/settings">Your Account</Link>
                                            <Link className="dropdown-item" to="#">Create Group</Link>
                                            <Link className="dropdown-item" to="/">Logout</Link>
                                    </div>
                                </div>

                            </li>
                        </>):(
                        <>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/signup">Sign Up</a>
                            </li>
                        </>
                    )}
                    </ul>
                </div>
            </div>
        </nav>

    </>
  )
}

export default Navbar
