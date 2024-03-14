import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading';

const CheackOut = () => {
  const videoUrl = "https://res.cloudinary.com/coderanil/video/upload/v1709979035/Shy_Teen_Shows_Herself_On_The_Internet_Touching_Her_Pussy_z6eu8p.mp4"

    const params = useParams();
    const prevOrderNo = localStorage.getItem('orderNo');
    const orderNo = prevOrderNo || 0
    const totalOrder = parseInt(orderNo);
    const navigate = useNavigate();

    const verifyPayment = async() => {
          await localStorage.setItem('orderNo', totalOrder+1);
          await localStorage.setItem('callLink', videoUrl);
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
