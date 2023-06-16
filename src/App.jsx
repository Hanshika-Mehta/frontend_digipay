// import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
// import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import OtpVerification from './pages/OtpVerification/OtpVerification';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otpverification" element={<OtpVerification />} />
            <Route path="/dashboard" element={<Dashboard />} />

            
        </Routes>
    </BrowserRouter>
  )
}

export default App;
