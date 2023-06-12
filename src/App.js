import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {LandingPage} from "./component/LandingPage"
import {OtpVerification} from "./component/OtpVerification"
import Register from "./component/Register"
import Login from "./component/Login"

function App(){
  return (
    <Routes>
    <Route  path="/" element={<LandingPage />}/>
    <Route path="/OtpVerification" element={<OtpVerification />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Login" element={<Login />} />
    </Routes>
  )
}

export default App;