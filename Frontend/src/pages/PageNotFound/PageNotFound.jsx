import React from 'react'
import { useNavigate } from 'react-router-dom'
function PageNotFound() {
    const Navigate = useNavigate();
    const HandleClick = (e) => {
    e.preventDefault();
      Navigate('/');
    }
  return (
   <>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',flexDirection:'column'}}>
        <h1 style={{fontSize:'10rem'}}>404</h1>
        <h2>Page Not Found</h2>
        <button style={{padding:'10px 20px',marginTop:'20px',fontSize:'1rem',cursor:'pointer'}} onClick={HandleClick}>Go to Home Page</button>
    </div>
   </>
  )
}

export default PageNotFound
