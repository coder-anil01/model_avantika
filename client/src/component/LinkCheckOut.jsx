import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading';
import jsonData from '../data/callLink.json';
import { useAuth } from '../context/AuthProvider';

const LinkCheckOut = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [auth, setAuth] = useAuth();

    const getOrder = async() => {
        try {
            const {data} = await axios.post('/api/v1/order/getOrder', {number:params.number, orderId:params.orderId})
            console.log(data)
            if(data.success){
              localStorage.setItem('callLink', jsonData[data?.orderCount]);
              localStorage.setItem('auth', JSON.stringify(data?.user));
              setAuth(data?.user)
              navigate('/order');
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getOrder()
    },[params])
    
  return (
    <div>
      <Loading/>
    </div>
  )
}

export default LinkCheckOut
