import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './page/Homepage';
import Navbar from './component/Navbar';
import Pricing from './page/Pricing';
const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/pricing' element={<Pricing />}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
