import React, { useState } from 'react'
import {PiCaretDoubleRightBold} from 'react-icons/pi'
import '../style/Pricing.css'
import { Link } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaRegCopy } from "react-icons/fa";

const Pricing = () => {

    const [qrmodel, setQrmodel] = useState(false);
    const [qrcode, setQrcode] = useState('');
    const [upicopy, setUpicopy] = useState(false);
    const [orderbutton, setOrderbutton] = useState('Place Order')

// Download image
    const handleImageDownload = async () => {
        const response = await fetch(qrcode);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'My Manager QR.jpg');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    };

// Copy upi id
    const copyText = () => {
        navigator.clipboard.writeText("avantikamodel@upi");
        setUpicopy(true);
    }

// Order
    const handleOrder =()=>{
        try {
            
        } catch (error) {
            
        }
    }

  return (
    <>
    <div className="pricing">
    <div className='homepage-heading'>My <span>Pricing</span></div>
        <div className="prcing-container">
            <div className="pricing-card">
                <div className="pricing-card-heading">One Time</div>
                <div className="pricing-price">$ 199</div>
                <div className="pricing-des"><PiCaretDoubleRightBold/> calibration calibration</div>
                <div className="pricing-des"><PiCaretDoubleRightBold/> calibration Paid Pormation</div>
                <div className="pricing-des"><PiCaretDoubleRightBold/> calibration Paid Pormation</div>
                <Link><div className="pricing-button" onClick={()=>{setQrmodel(true), setQrcode('https://res.cloudinary.com/coderanil/image/upload/v1709948599/QR_1709946762_w1oukv.png')}}>Pay Now</div></Link>
            </div>

            <div className="pricing-card">
                <div className="pricing-card-heading">One Month</div>
                <div className="pricing-price">$ 199</div>
                <div className="pricing-des"><PiCaretDoubleRightBold/> calibration calibration</div>
                <div className="pricing-des"><PiCaretDoubleRightBold/> calibration Paid Pormation</div>
                <div className="pricing-des"><PiCaretDoubleRightBold/> calibration Paid Pormation</div>
                <Link><div className="pricing-button" onClick={()=>{setQrmodel(true), setQrcode('https://res.cloudinary.com/coderanil/image/upload/v1709948610/QR_1709946781_kauomd.png')}}>Pay Now</div></Link>
            </div>
        </div>
        
{/* Order */}
        <form onSubmit={handleOrder} className="pricing-form">
            <div className="pricing-file-card">
                <input type="file"
                    required/>
            </div>
            <button type='submit'>{orderbutton}</button>
        </form>
    </div>

{/* Model */}
    {qrmodel && <div className="qrcode">
        <div className="qrcode-container">
            <div className="qrcode-card">
                <div className="qrcode-close" onClick={()=>setQrmodel(false)}><IoClose/></div>
                <div className="qrcode-name">Anil Kumar <span><RiVerifiedBadgeFill/></span></div>
                <img src={qrcode} alt=""/>
                <div className='qrcode-upi-card'>
                    <div className= {upicopy ? "upicopy":"qrcode-upiid"}>avantikamodel@upi</div>
                    <button onClick={copyText}><FaRegCopy/></button>
                </div>
                <button className='home-book-button pricing-image-load' onClick={()=> {handleImageDownload(), setQrmodel(false)}}>Download Qr Code</button>
            </div>
        </div>
    </div>}
    </>
  )
}

export default Pricing