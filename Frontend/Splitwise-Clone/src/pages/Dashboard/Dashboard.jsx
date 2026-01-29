import React from 'react'
import Navbar from '../../components/Navbar'

function Dashboard({isLoggedin}) {
  return (
    <>
        <Navbar isLoggedin={isLoggedin}/>
        <div>
            
            <h1>Dashboard Page</h1>

        </div>
    </>
  )
}

export default Dashboard
