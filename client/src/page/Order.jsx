import axios from "axios";
import React, { useEffect, useState } from "react";
import { FcVideoCall } from "react-icons/fc";
import VideoCall from "./VideoCall";
import { toast } from "react-toastify";
import '../style/Order.css';
import { useAuth } from "../context/AuthProvider";
import {NavLink} from 'react-router-dom';
import Loading from "../component/Loading";
const Order = () => {

  const [orders, setOrders] = useState([]);
  const [videocall, setVideocall] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [auth] = useAuth();
  const [existorder, setExistorder] = useState(false);

  const getOrders = async () => {
    try {
      const { data } = await axios.post('/api/v1/order/getorder', {orderId:auth?.orderId});
      setOrders(data?.orders);
      if(data?.orders?.length === 0) setExistorder(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    if(auth?.user?._id){
      getOrders();
    }else{
      setExistorder(true);
    }
},[auth])

  const receiveDataFromChild = (data) => {
    setVideocall(data);
  };

  const startVideoCall = (status, videourl) => {
    const slik = status.slice(0, 7);
    if (slik === "Call Me") {
      return setVideocall(true);
    } else {
      toast.info(status);
    }
  };

  return (
    <>
      <div className="order">
        <div className="order-container">
          {orders[0] ? orders?.map((o)=>(
            <div key={o?._id} className="order-card">
              <img src={o?.payscreenshot} alt="" className="order-image" />
              <div className="order-right">
                <div className="order-id">
                  <strong>Order Id:-</strong> {o?._id}
                </div>
                <div className="order-message">::-- {o?.status}</div>
                <div className="order-videocall-icon" onClick={() => { startVideoCall(o?.status);setVideoUrl(o?.videourl);}} >
                  <FcVideoCall />
                </div>
              </div>
            </div>
          )) :
          <>{existorder ?
          <>
          <div style={{marginBottom: "30px"}}>You have not booked any plane</div>
          <NavLink to='/pricing' className="navbar-login-button">Book a plane</NavLink>
          </>:
          <><Loading/></>}</>}
        </div>
      </div>
      {videocall && (
        <VideoCall handleSend={receiveDataFromChild} videoUrl={videoUrl} />
      )}
    </>
  );
};

export default Order;