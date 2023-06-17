import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./register.scss";
import Logo from "../../assets/logo1.png";

const Register = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div className="register">
            <div className="registerLeft">
                <img src={Logo} alt="" />
                <h1>Experience hassle-free <br /> Transaction</h1>
                <p>Streamline transaction with DigiPay, a seamless <br /> digital wallet. Simplify payments and embrace the <br /> future of cashless transaction with our secure and <br /> user-friendly platform using e-Rupi</p>
            </div>

            <div className="registerRight">
                <div className="registerContainer">
                    <h1 className="welcomeHeading">Register</h1>
                    <input
                        className="inputBox"
                        type="text"
                        name="name"
                        // onChange={(e) => setName(e.target.value)}
                        // id="name"
                        placeholder="Name"
                        required
                    />
                    <input
                        className="inputBox"
                        type="text"
                        name="phonenumber"
                        // onChange={(e) => setName(e.target.value)}
                        // id="name"
                        placeholder="Phone Number"
                        required
                    />
                    <input
                        className="inputBox"
                        type="text"
                        name="password"
                        // onChange={(e) => setName(e.target.value)}
                        // id="name"
                        placeholder="Password"
                        required
                    />
                    <div className="labelCheck">
                        <input className="checkbox"
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <label>
                            I accept the Terms and Conditions
                        </label>
                    </div>

                    <Link to="/otpverification">
                        <button className="registerButton">Register</button>
                    </Link>
                    <Link to="/login">
                        <h3>Already have an account? Login</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register

