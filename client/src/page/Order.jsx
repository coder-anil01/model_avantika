import axios from "axios";
import React, { useEffect, useState } from "react";
import { FcVideoCall } from "react-icons/fc";
import VideoCall from "./VideoCall";
import { toast } from "react-toastify";
import '../style/Order.css';

const Order = () => {

  const [orders, setOrders] = useState([]);
  const [videocall, setVideocall] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  console.log(orders)


  useEffect(()=>{
    const data = localStorage.getItem('order');
    if(data){
        const parseData = JSON.parse(data);
        console.log(parseData._id);
        getOrders(parseData._id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[])

  const getOrders = async (id) => {
    try {
      const { data } = await axios.post('/api/v1/order/getorder', {id});
      setOrders(data?.order);
    } catch (error) {
      console.log(error);
    }
  };

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
            <div className="order-card">
              <img src={orders?.payscreenshot} alt="" className="order-image" />
              <div className="order-right">
                <div className="order-id">
                  <strong>Order Id:-</strong> {orders?._id}
                </div>
                <div className="order-message">::-- {orders?.status}</div>
                <div className="order-videocall-icon" onClick={() => { startVideoCall(orders?.status);setVideoUrl(orders?.videourl);}} >
                  <FcVideoCall />
                </div>
              </div>
            </div>
        </div>
      </div>
      {videocall && (
        <VideoCall handleSend={receiveDataFromChild} videoUrl={videoUrl} />
      )}
    </>
  );
};

export default Order;