import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading';

const CheackOut = () => {

    const params = useParams();
    const prevOrderNo = localStorage.getItem('orderNo');
    const orderNo = prevOrderNo || 0 ;
    const navigate = useNavigate();

    const verifyPayment = async() => {
        try {
            const {data} = await axios.post('/api/v1/payment/verifying', {orderId: params?.id, orderNo});
            if(data.success){
              await localStorage.setItem('orderNo', data?.orderNo);
              await localStorage.setItem('callLink', data?.callLink);
              navigate('/order');
            };
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        if(params?.id) verifyPayment();
    }, [params])

  return (
    <>
      <Loading/>
    </>
  )
}

export default CheackOut
