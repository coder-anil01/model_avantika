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
    useEffect(()=>{
        getOrders();
    },[])

    const copyText = (id) => {
        navigator.clipboard.writeText(`http://localhost:5173/linkcheckout/Number/${id}`);
        setUpicopy(true);
    }

  return (
    <>
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
