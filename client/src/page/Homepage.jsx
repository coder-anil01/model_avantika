import React from 'react';
import {NavLink} from 'react-router-dom';
import {FaInstagram, FaFacebookF} from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io5";
import '../style/Homepage.css';
import Gallary from './Gallary';
import Reviews from './Reviews';
import {Link} from 'react-router-dom';

const Homepage = () => {
  return (
    <>
    <div className='home'>
      <div className='home-container'>
        <div className='home-left'>
            <h1>Hi I'm Avanshika</h1>
            <h3>Call me for Adult video call</h3>
            <h4>Video call all features camera mic on /off</h4>
            <div className='home-media-icons-card'>
                <Link to="" className='home-media-icons'><FaInstagram/></Link>
                <Link to='https://wa.link/idejyp' target='_blank' className='home-media-icons'><IoLogoWhatsapp/></Link>
            </div>
            <NavLink to='/pricing' className='home-book-button'>Video Call</NavLink>
        </div>
        <div className='home-right'>
            <img className='home-right-img' src="https://res.cloudinary.com/coderanil/image/upload/v1710071698/473_1000_vg0wgq_copy-removebg-preview_ien1tz.png" alt="Avantika" />
        </div>
      </div>

{/* GALLARY */}
      <Gallary/>
      <Reviews/>
    </div>
    </>
  )
}

export default Homepage
