import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <div className="navbar-container">
        <NavLink to='/' className='navbar-logo'>Avantika</NavLink>
        <div className="navbar-items">
          <NavLink to='/about' className='navbar-item'>About Me</NavLink>
          <NavLink to='/services' className='navbar-item'>Services</NavLink>
          <NavLink to='/pricing' className='navbar-item'>Pricing</NavLink>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Navbar
