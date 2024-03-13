import React, { useState } from 'react'
import {PiCaretDoubleRightBold} from 'react-icons/pi'
import '../style/Pricing.css'
import { Link } from 'react-router-dom'
import { load } from "@cashfreepayments/cashfree-js";
import axios from 'axios';
import Loading from '../component/Loading';

const Pricing = () => {

    const [loading, setloading] = useState(false);

// Intialize Test || Production
    let cashfree;
    var initializeSDK = async function () {          
        cashfree = await load({
            mode: "production"
        });
    };
    initializeSDK();

  const handlePayment = async(plan) => {
    setloading(true);
    try {
        const {data} = await axios.post('/api/v1/payment/session', {plan});
        console.log(data)
        if(data.success){
            doPayment(data?.response?.payment_session_id);
        }else{
            setloading(false);
        }
    } catch (error) {
        setloading(false);
        console.log(error);
    }
  };

  const doPayment = async (token) => {
    console.log(token);
    let checkoutOptions = {
        paymentSessionId: token,
        redirectTarget: "_self",
    };
    cashfree.checkout(checkoutOptions);
};

  return (
    <>
    <div className="pricing">
    <div className='homepage-heading'>My <span>Pricing</span></div>
        <div className="prcing-container">
            <div className="pricing-card">
                <div className="pricing-card-heading">One Time</div>
                <div className="pricing-price"><span>₹499</span>₹149</div>
                <div className="pricing-des"><PiCaretDoubleRightBold/> calibration calibration</div>
                <div className="pricing-des"><PiCaretDoubleRightBold/> calibration Paid Pormation</div>
                <div className="pricing-des"><PiCaretDoubleRightBold/> calibration Paid Pormation</div>
                <Link><div className="pricing-button" onClick={()=>handlePayment(149)}>Book Now</div></Link>
            </div>

            <div className="pricing-card">
                <div className="pricing-card-heading">One Month</div>
                <div className="pricing-price"><span>₹4999</span>₹1499</div>
                <div className="pricing-des"><PiCaretDoubleRightBold/> calibration calibration</div>
                <div className="pricing-des"><PiCaretDoubleRightBold/> calibration Paid Pormation</div>
                <div className="pricing-des"><PiCaretDoubleRightBold/> calibration Paid Pormation</div>
                <Link><div className="pricing-button" onClick={()=>handlePayment(1499)}>Book Now</div></Link>
            </div>
        </div>
    </div>

    {loading && <Loading/>}
    </>
  )
}

export default Pricing