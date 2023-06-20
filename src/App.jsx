// import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
// import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import OtpVerification from './pages/OtpVerification/OtpVerification';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Transaction from './pages/Transaction/Transaction';
import VoucherPage from './pages/VoucherPage/VoucherPage';
import VoucherID from './pages/VoucherID/VoucherID';
import Profile from './pages/Profile/Profile';
import Merchant from './pages/Merchant/Merchant';
import Promotion from './pages/Promotions/Promotion';
import CompanyRegister from './pages/CompanyProfile/companyRegister/CompanyRegister';
import CompanyLogin from './pages/CompanyProfile/companyLogin/CompanyLogin';
import CompanyDashboard from './pages/CompanyProfile/companyDashboard/CompanyDashboard';
// import OTPModal from './models/otpModel/OTPModal';

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
                <Route path="/voucherPage" element={<VoucherPage />} />
                <Route path="/voucherID" element={<VoucherID />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/promotions" element={<Promotion />} />
                <Route path="/transaction" element={<Transaction />} />
                <Route path="/merchant" element={<Merchant />} />
                <Route path="/company-register" element={<CompanyRegister />} />
                <Route path="/company-login" element={<CompanyLogin />} />
                <Route path="/company-dashboard" element={<CompanyDashboard/>} />
                {/* <Route path="/enterOTP" element={<OTPModal />} /> */}


            </Routes>
        </BrowserRouter>
    )
}

export default App;
