import React from 'react';
import {NavLink} from 'react-router-dom';
import {FaInstagram, FaFacebookF} from 'react-icons/fa';
import '../style/Homepage.css';

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
                <div className='home-media-icons'><FaFacebookF/></div>
            </div>
            <NavLink to='/pricing' className='home-book-button'>Video Call</NavLink>
        </div>
        <div className='home-right'>
            <img className='home-right-img' src="https://res.cloudinary.com/coderanil/image/upload/v1709804588/avantika1st_ahtdms.png" alt="Avantika" />
        </div>
      </div>

{/* GALLARY */}
      <div className='gallary'>
        <div className='homepage-heading'>My <span>Photoes</span></div>
        <div className='gallary-container'>
          <img className='gallary-images' src="https://res.cloudinary.com/coderanil/image/upload/a_-90//v1707036080/474_1000_nvfqxf.webp" alt="" />
          <img className='gallary-images' src="https://res.cloudinary.com/coderanil/image/upload/a_-90//v1707036059/475_1000_d36udd.webp" alt="" />
          <img className='gallary-images' src="https://res.cloudinary.com/coderanil/image/upload/v1707037142/422870947_1077826899935768_7967851658093377718_n.jpg_zcpfkj.jpg" alt="" />
          <img className='gallary-images' src="https://res.cloudinary.com/coderanil/image/upload/v1707036209/467_1000_ndx9ht.webp" alt="" />
          <img className='gallary-images' src="https://res.cloudinary.com/coderanil/image/upload/v1707036193/471_1000_wkeq5g.webp" alt="" />
          <img className='gallary-images' src="https://res.cloudinary.com/coderanil/image/upload/v1707036135/464_1000_nmviso.webp" alt="" />
          <img className='gallary-images' src="https://res.cloudinary.com/coderanil/image/upload/v1707036233/465_1000_zfhibb.webp" alt="" />
          <img className='gallary-images' src="https://res.cloudinary.com/coderanil/image/upload/v1707036218/466_1000_riqgdh.webp" alt="" />
          <img className='gallary-images' src="https://res.cloudinary.com/coderanil/image/upload/a_90//v1707036326/515_1000_ulpyqv.webp" alt="" />
          <img className='gallary-images' src="https://res.cloudinary.com/coderanil/image/upload/a_90//v1707036338/514_1000_jntkbj.webp" alt="" />
        </div>
      </div>

    </div>
    </>
  )
}

export default Homepage
