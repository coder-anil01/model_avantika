import React, { useState } from 'react'
import {toast} from 'react-toastify';
import '../style/LoginModel.css';
import { IoClose } from "react-icons/io5";
import axios from 'axios';
import { useAuth } from '../context/AuthProvider';

const LoginModel = (props) => {
    const [name, setName] = useState('');
    const [uniq, setUniq] = useState('');
    const [loading, setLoading] = useState('Create');
    const [auth, setAuth] = useAuth();

    const handleSend = () => {
      props.handleSend(false);
    };

    const createAccount = async(e) => {
        e.preventDefault();
        setLoading('Loading...')
        try {
            const {data} = await axios.post('/api/v1/user/create', {name, uniq});
            setLoading('Login');
            if(data.success){
              toast(data?.message);
              localStorage.setItem('auth', JSON.stringify(data));
              setAuth({...auth, user: data?.user});
              handleSend();
            }else{
              toast(data?.message);
            }
        } catch (error) {
            console.log(error);
            setLoading('Create');
        }
      }

  return (
    <>
    <div className="login">
      <div className="login-close" onClick={handleSend}><IoClose/></div>
        <h2>Create Account</h2>
        <form onSubmit={createAccount} className="login-container">
            <div className='login-form-items'>
                <div className='login-form-icon'>Name</div>
                <input type="text"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                  placeholder='Enter Your Email'
                  className='login-form-input'
                  autoFocus required/>
            </div>

            <div className='login-form-items'>
                <div className='login-form-icon'>number / Email</div>
                <input type="text"
                  value={uniq}
                  onChange={(e)=> setUniq(e.target.value)}
                  placeholder='Your Whatshapp Numbar or Email'
                  className='login-form-input'
                  required/>
            </div>
            <button type='submit'>{loading}</button>
        </form>
    </div> 
    </>
  )
}

export default LoginModel
