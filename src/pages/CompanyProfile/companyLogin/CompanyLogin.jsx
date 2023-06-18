import React from 'react';;
import "./companyLogin.scss";
import { Link } from 'react-router-dom';
import Logo from "../../../assets/logo1.png";

const CompnayLogin = () => {
  return (
    <div className="login">
            <div className="loginLeft">
                <img src={Logo} alt="" />
                <h1>Welcome Back</h1>
                <p>Enter Your Details to Login to your Digi Pay account</p>
            </div>

            <div className="loginRight">
                <h1 className="loginHeading">Login</h1>
                <input
                        className="inputBox"
                        type="email"
                        name="email"
                        // onChange={(e) => setName(e.target.value)}
                        // id="name"
                        placeholder="Company Email"
                        required
                    />
                    <input
                        className="inputBox"
                        type="password"
                        name="name"
                        // onChange={(e) => setName(e.target.value)}
                        // id="name"
                        placeholder="Password"
                        required
                    />

                    <Link to="/company-dashboard">
                        <button className="loginButton">Login</button>
                    </Link>
                    <Link to="/company-register">
                        <h3>Don't have an account? Register</h3>
                    </Link>
            </div>
        </div>
  )
}

export default CompnayLogin;
