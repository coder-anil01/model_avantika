import React from 'react'
import {PiCaretDoubleRightBold} from 'react-icons/pi'
import '../style/Pricing.css'
import { Link } from 'react-router-dom';

const Pricing = () => {

    let plan1Pay = "https://payments.cashfree.com/links/u6dvkbvbc040"
    let plan2Pay = "https://payments.cashfree.com/links/K6dvkkrvm040"
  return (
    <>
    <div className="pricing">
    <div className='homepage-heading'>My <span>Pricing</span></div>
        <div className="prcing-container">
            <div className="pricing-card">
                <div className="pricing-card-heading">One Time</div>
                <div className="pricing-price"><span>₹499</span>₹99</div>
                <div className="pricing-des"><PiCaretDoubleRightBold/> Video Call Sex</div>
                <div className="pricing-des"><PiCaretDoubleRightBold/> All Body Part View</div>
                <div className="pricing-des"><PiCaretDoubleRightBold/> Safe Video Call</div>
                <div className="pricing-des"><PiCaretDoubleRightBold/> Camera On/Off Fitures Available</div>
                <Link to={plan1Pay}>
                    <div className="pricing-button">Book Now</div>
                </Link>
            </div>

            <div className="pricing-card">
                <div className="pricing-card-heading">One Month</div>
                <div className="pricing-price"><span>₹4999</span>₹999</div>
                <div className="pricing-des"><PiCaretDoubleRightBold/> Video Call Sex</div>
                <div className="pricing-des"><PiCaretDoubleRightBold/> All Body Part View</div>
                <div className="pricing-des"><PiCaretDoubleRightBold/> Safe Video Call</div>
                <div className="pricing-des"><PiCaretDoubleRightBold/> Camera On/Off Fitures Available</div>
                <Link to={plan2Pay}>
                    <div className="pricing-button">Book Now</div>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Pricing