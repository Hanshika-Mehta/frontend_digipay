import React from 'react';
import "./login.scss"
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo1.png";

const Login = () => {
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
                        type="text"
                        name="name"
                        // onChange={(e) => setName(e.target.value)}
                        // id="name"
                        placeholder="Phone Number"
                        required
                    />
                    <input
                        className="inputBox"
                        type="text"
                        name="name"
                        // onChange={(e) => setName(e.target.value)}
                        // id="name"
                        placeholder="Password"
                        required
                    />

                    <Link to="/otpverification">
                        <button className="loginButton">Login</button>
                    </Link>
                    <Link to="/register">
                        <h3>Don't have an account? Register</h3>
                    </Link>
            </div>
        </div>
    )
}

export default Login
