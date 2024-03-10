import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './page/Homepage';
import Navbar from './component/Navbar';
import Pricing from './page/Pricing';
import Order from './page/Order';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AdminRoute from './page/admin/AdminRoute';
import Orders from './page/admin/Orders';

const App = () => {
  return (
    <>
    <ToastContainer
      position="top-right"
      autoClose={3000}/>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/pricing' element={<Pricing />}/>
        <Route path='/order' element={<Order />}/>

{/* ADMIN */}
        <Route path='/admin' element={<AdminRoute />}>
          <Route path='' element={<Orders />}/>
        </Route>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
