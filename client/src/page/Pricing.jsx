import React from 'react'
import {PiCaretDoubleRightBold} from 'react-icons/pi'
import '../style/Pricing.css'
import { Link } from 'react-router-dom';

const Pricing = () => {


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
                <Link to='https://payments.cashfree.com/links/J6dkqog1pk40'>
                    <div className="pricing-button">Book Now</div>
                </Link>
            </div>

            <div className="pricing-card">
                <div className="pricing-card-heading">One Month</div>
                <div className="pricing-price"><span>₹4999</span>₹1499</div>
                <div className="pricing-des"><PiCaretDoubleRightBold/> calibration calibration</div>
                <div className="pricing-des"><PiCaretDoubleRightBold/> calibration Paid Pormation</div>
                <div className="pricing-des"><PiCaretDoubleRightBold/> calibration Paid Pormation</div>
                <Link to='https://payments.cashfree.com/links/J6dkqog1pk40'>
                    <div className="pricing-button">Book Now</div>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Pricing