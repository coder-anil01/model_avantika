import React, { useEffect, useState } from 'react'
import {Outlet} from 'react-router-dom';

const AdminRoute = () => {

    const [admin, setAdmin] = useState(false);
    const [pass, setPass] = useState('');
    // const adminPass = "@Avantika8987mack";
    const adminPass = "12";

    useEffect(()=>{
        if(pass === adminPass){
            return setAdmin(true);
        }
    },[pass])

  return (
    <>
      {admin? <Outlet/> :
      <div style={{display: "flex"}}>
      <input type="text" onChange={(e)=> setPass(e.target.value)} placeholder='Password' style={{margin: "40vh auto"}}/>
      </div>}
    </>
  )
}

export default AdminRoute
