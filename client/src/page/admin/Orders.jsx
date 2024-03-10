import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../style/admin/AdminOrder.css';
import { Link } from 'react-router-dom';

const Orders = () => {

    const [allOrders, setOrders] = useState([]);
    const [selectstatus, setSelectstatus] = useState('');
    const [selectvideo, setSelectvideo] = useState('');
    console.log(selectstatus)

    const getOrders = async() => {
        try {
            const {data} = await axios.get('/api/v1/order/getallorder');
            setOrders(data?.orders);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getOrders();
    },[])

    const handleUpdate = async(id) => {
        console.log(selectstatus, selectvideo, id)
        try {
            const {data} = axios.post('/api/v1/order/update', {status:selectstatus, videourl:selectvideo, id});
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
    <div className="admin-order">
        <div className="admin-order-container">
            {allOrders?.map((o)=>(
                <div  key={o?._id} className="admin-order-card">
                    <Link to={o?.payscreenshot}><img src={o?.payscreenshot} alt="" className='admin-order-image' /></Link>
                    
                    <div className='admin-order-rext'>
                        <select defaultValue={o?.status} onChange={(value) => setSelectstatus(value.target.value)} className='admin-order-select'>
                            <option value="Call Me">Call Me</option>
                            <option value="Please Wait...">Please Wait...</option>
                            <option value="Wrong Payment ScreenShort">Wrong Payment ScreenShort</option>
                        </select>
                        <select className='admin-order-select' onChange={(value) => setSelectvideo(value.target.value)}>
                            <option value="Call Me">1</option>
                            <option value="Call Me">2</option>
                            <option value="Call Me">3</option>
                            <option value="Call Me">4</option>
                        </select>
                        <button className='admin-order-date' onClick={()=>handleUpdate(o?._id)}>Submit</button>
                        <div className='admin-order-date'>{o?.createdAt.slice(0, 10)}</div>
                    </div>
                </div>
            ))}
        </div>
    </div> 
    </>
  )
}

export default Orders
