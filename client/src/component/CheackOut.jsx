import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading';

const CheackOut = () => {

    const params = useParams();
    const prevOrderNo = localStorage.getItem('orderNo');
    const orderNo = prevOrderNo || 0
    const totalOrder = parseInt(orderNo);
    const navigate = useNavigate();

    const verifyPayment = async() => {
          await localStorage.setItem('orderNo', totalOrder+1);
          await localStorage.setItem('callLink', "8789hfoewjhnfwehfr9wghf9w");
          navigate('/order');
    }

    useEffect(()=>{
       verifyPayment();
    }, [params])

  return (
    <>
      <Loading/>
    </>
  )
}

export default CheackOut
