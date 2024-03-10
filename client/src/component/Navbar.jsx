import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../style/Navbar.css'
import LoginModel from './LoginModel'
import { useAuth } from '../context/AuthProvider'

const Navbar = () => {

  const [loginModel, setLoginModel] = useState(false);
  const [auth] = useAuth();

  const receiveDataFromChild = (data) => {
    setLoginModel(data);
  };

  return (
    <>
    <div className="navbar">
      <div className="navbar-container">
        <NavLink to='/' className='navbar-logo'>Avantika</NavLink>
        <div className="navbar-items">
          <NavLink to='/pricing' className='navbar-item'>Booking</NavLink>
          <NavLink to='/order' className='navbar-item'>Video Call</NavLink>
          {!auth?.user && <div onClick={()=>setLoginModel(prev=> !prev)} className={loginModel ? 'navbar-login-button active': 'navbar-login-button'}>SignUp</div>}
        </div>
      </div>
    </div>
    {loginModel && <LoginModel handleSend={receiveDataFromChild}/>}
    </>
  )
}

export default Navbar
