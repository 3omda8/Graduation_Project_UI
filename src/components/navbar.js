import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'



export default function Navbar() {
  return (
    <>
    
    <nav> 
      <ul className='bckg'>
        <li className='navleft'><Link className="link" to="/">Home</Link></li>
        <li className='navleft'><Link className="link" to="/about">Information</Link></li>
        <li className='navleft'><Link className="link" to="/contact">Contact </Link></li> 
        <li  className='logo'>Diabetic Retinopathy</li> 
        
      </ul>
    </nav>
    
    </>
  )
}


