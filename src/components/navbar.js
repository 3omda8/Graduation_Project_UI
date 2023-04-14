import React from 'react'
import './navbar.css'




export default function Navbar() {
  return (
    <>
    
    <nav> 
      <ul className='bckg'>
        <li className='navleft'><a className="active" href="https://www.google.com.eg/">Home</a></li>
        <li className='navleft'><a href="#">Our Services</a></li>
        <li className='navleft'><a href="#">About</a></li>
        <li className='navleft'><a href="#">Contact Us</a></li> 
        <li  className='logo'>Diabetic Retinopathy</li> 
        
      </ul>
    </nav>
    
    </>
  )
}


