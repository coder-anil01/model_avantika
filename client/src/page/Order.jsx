import React, { useEffect, useState } from 'react'
import '../style/Order.css';
import { FcVideoCall } from "react-icons/fc";
import {Link} from 'react-router-dom';
import VideoCall from './VideoCall';
import {toast} from 'react-toastify';
const Order = () => {
  
  const [callLink, setCallLink] = useState('');
  const [order, setOrder] = useState(false);
  const [videocall, setVideocall] = useState(false);
  const [online, setOnline] = useState('');

  useEffect(()=>{
    onlineShow();
    const link = localStorage.getItem('callLink');
    if(link){
      setOrder(true);
      setCallLink(link);
    }
  },[])

  const receiveDataFromChild = (data) => {
        setVideocall(data);
  };

  const handleCall = () => {
    setVideocall(true);
    if(online === "Online"){
    }else{
      toast.info('Please wait for Online');
    }
  }

  const onlineShow = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentTime = currentHour + (currentMinutes / 60);

    const morningStart = 4;
    const morningEnd = 6;
    const noonStart = 11;
    const noonEnd = 14;
    const eveningStart = 20;
    const eveningEnd = 23;

    if ((currentTime >= morningStart && currentTime < morningEnd) ||
        (currentTime >= noonStart && currentTime < noonEnd) ||
        (currentTime >= eveningStart && currentTime < eveningEnd)) {
          setOnline("Online");
        } else {
          setOnline("Offline");
    }
  }

  return (
    <>
    <div className="order">
      <div className="order-container">
        <div className="order-girl-image">
          <img src="https://res.cloudinary.com/coderanil/image/upload/a_-90//v1707036059/475_1000_d36udd.webp" alt="" />
        </div>
        <div className='show-online'> <div className="show-online-icon"/>{online}</div>
        <div className="order-center-element">
          {order? <div className='order-videocall-icon' onClick={handleCall}><FcVideoCall /></div>:
          <div className='order-not'>
            <p>You have no any ticket plese book ticket</p>
            <Link to='/pricing'><button>Book now</button></Link>
          </div>}
        </div>

        <div className="order-online-timing">
          <p>Online For Video Call</p>
          <li>4AM - 6AM</li>
          <li>11AM - 2PM</li>
          <li>8AM - 11PM</li>
        </div>
        
      </div>
    </div>

    {videocall && <VideoCall handleSend={receiveDataFromChild} videoUrl={callLink} />}
    </>
  )
}

export default Order




























// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { FcVideoCall } from "react-icons/fc";
// import VideoCall from "./VideoCall";
// import { toast } from "react-toastify";
// import '../style/Order.css';
// import { useAuth } from "../context/AuthProvider";
// import {NavLink} from 'react-router-dom';
// import Loading from "../component/Loading";
// const Order = () => {

//   const [orders, setOrders] = useState([]);
//   const [videocall, setVideocall] = useState(false);
//   const [videoUrl, setVideoUrl] = useState("");
//   const [auth] = useAuth();
//   const [existorder, setExistorder] = useState(false);

//   const getOrders = async () => {
//     try {
//       const { data } = await axios.post('/api/v1/order/getorder', {orderId:auth?.orderId});
//       setOrders(data?.orders);
//       if(data?.orders?.length === 0) setExistorder(true);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(()=>{
//     if(auth?.user?._id){
//       getOrders();
//     }else{
//       setExistorder(true);
//     }
// },[auth])

//   const receiveDataFromChild = (data) => {
//     setVideocall(data);
//   };

//   const startVideoCall = (status, videourl) => {
//     const slik = status.slice(0, 7);
//     if (slik === "Call Me") {
//       return setVideocall(true);
//     } else {
//       toast.info(status);
//     }
//   };

//   return (
//     <>
//       <div className="order">
//         <div className="order-container">
//           {orders[0] ? orders?.map((o)=>(
//             <div key={o?._id} className="order-card">
//               <img src={o?.payscreenshot} alt="" className="order-image" />
//               <div className="order-right">
//                 <div className="order-id">
//                   <strong>Order Id:-</strong> {o?._id}
//                 </div>
//                 <div className="order-message">::-- {o?.status}</div>
//                 <div className="order-videocall-icon" onClick={() => { startVideoCall(o?.status);setVideoUrl(o?.videourl);}} >
//                   <FcVideoCall />
//                 </div>
//               </div>
//             </div>
//           )) :
//           <>{existorder ?
//           <>
//           <div style={{marginBottom: "30px"}}>You have not booked any plane</div>
//           <NavLink to='/pricing' className="navbar-login-button">Book a plane</NavLink>
//           </>:
//           <><Loading/></>}</>}
//         </div>
//       </div>
//       {videocall && (
//         <VideoCall handleSend={receiveDataFromChild} videoUrl={videoUrl} />
//       )}
//     </>
//   );
// };

// export default Order;