import React, { useState } from 'react'
import {PiCaretDoubleRightBold} from 'react-icons/pi'
import '../style/Pricing.css'
import { Link, useNavigate } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaRegCopy } from "react-icons/fa";
import axios from 'axios';

const Pricing = () => {

    const [qrmodel, setQrmodel] = useState(false);
    const [qrcode, setQrcode] = useState('');
    const [upicopy, setUpicopy] = useState(false);
    const [orderbutton, setOrderbutton] = useState('Place Order');
    const [payscreenshot, setPayscreenshot] = useState('');
    const navigate = useNavigate();

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

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPayscreenshot(reader.result);
            console.log(reader.result)
          };
          reader.readAsDataURL(file);
        }
      };

// Order
    const handleOrder = async(e)=>{
        e.preventDefault();
        setOrderbutton('Uploading...')
        try {
            const {data} = await axios.post('/api/v1/order/create', {payscreenshot});
            if(data.success){
                await localStorage.setItem('order', JSON.stringify(data.order));
                navigate('/order');
            }
        } catch (error) {
            setOrderbutton('Place Order');
            alert('Please Try Agian');
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
        <label className="pricing-file-upload">Upload Payment Screenshot</label>
            <div className="pricing-file-card">
                <input type="file"
                    onChange={handleImageChange}
                    placeholder='Upload payscreen'
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