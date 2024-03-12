import React from 'react';
import {NavLink} from 'react-router-dom';
import {FaInstagram, FaFacebookF} from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io5";

import '../style/Homepage.css';
import Gallary from './Gallary';

const Homepage = () => {
  return (
    <>
    <div className='home'>
      <div className='home-container'>
        <div className='home-left'>
            <h1>Hi I'm Avantika</h1>
            <h2>I'm Bold Model</h2>
            <div className='home-media-icons-card'>
                <div className='home-media-icons'><FaInstagram/></div>
                <div className='home-media-icons'><IoLogoWhatsapp/></div>
            </div>
            <NavLink to='/pricing' className='home-book-button'>Video Call</NavLink>
        </div>
        <div className='home-right'>
            <img className='home-right-img' src="https://res.cloudinary.com/coderanil/image/upload/v1710071698/473_1000_vg0wgq_copy-removebg-preview_ien1tz.png" alt="Avantika" />
        </div>
      </div>

{/* GALLARY */}
      <Gallary/>
    </div>
    </>
  )
}

export default Homepage
