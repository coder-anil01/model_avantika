import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../style/Navbar.css'
import LoginModel from './LoginModel'

const Navbar = () => {

  const [loginModel, setLoginModel] = useState(false);

  const receiveDataFromChild = (data) => {
    setLoginModel(data);
  };

  return (
    <>
    <div className="navbar">
      <div className="navbar-container">
        <NavLink to='/' className='navbar-logo'>Avanshika</NavLink>
        <div className="navbar-items">
          <NavLink to='/pricing' className='navbar-item'>Booking</NavLink>
          <NavLink to='/order' className='navbar-item'>Video Call</NavLink>
        </div>
      </div>
    </div>
    {loginModel && <LoginModel handleSend={receiveDataFromChild}/>}
    </>
  )
}

export default Navbar
