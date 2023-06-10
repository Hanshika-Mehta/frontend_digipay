import {Route , Routes} from "react-router-dom"
import { BrowserRouter as Router, Switch } from "react-router-dom";
import {LandingPage} from "./component/LandingPage"
import OtpVerification from "./component/OtpVerification"
import Register from "./component/Register";
import Login from "./component/Login";



function App() {
    
  return (
    <Routes>
      <switch>
    <Route path="/" element={<LandingPage />}/>
    <Route path="/OtpVerification" element={<OtpVerification />}/>
    <Route path="/Register" element={<Register />}/>
    <Route path="/Login" element={<Login />}/>
    </switch>
      </Routes>
  );
}

export default App;
