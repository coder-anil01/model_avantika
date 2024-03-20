import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../style/admin/AdminOrder.css';

const Orders = () => {

    const [allOrders, setOrders] = useState([]);

    const getOrders = async() => {
        try {
            const {data} = await axios.get('/api/v1/order/getallorder');
            setOrders(data?.orders);
        } catch (error) {
            console.log(error);
        }
    }

    const createOrders = async() => {
        try {
            const {data} = await axios.get('/api/v1/order/createOrder');
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getOrders();
    },[])

    const copyText = (id) => {
        navigator.clipboard.writeText(`https://avanshika.vercel.app/linkcheckout/Number/${id}`);
        setUpicopy(true);
    }

  return (
    <>
    <button onClick={createOrders}>Create</button>
    <div className="admin-order">
        <div className="admin-order-container">
        <div className="admin-order-count">Total {allOrders.length} Order Created</div>
            {allOrders?.map((o)=>(
                <div  key={o?._id} className="admin-order-card">
                    <div className="admin-order-index">{o?._id}</div>
                    <button className="admin-order-index" onClick={()=>copyText(o?._id)}>Copy</button>
                </div>
            ))}
        </div>
    </div> 
    </>
  )
}

export default Orders
