import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./companyRegister.scss";
import Logo from "../../../assets/logo1.png";

const CompanyRegister = () => {
    const [isChecked, setIsChecked] = useState(false);

    // const [showDetailsModal, setShowDetailsModal] = useState(false);

    // const openDetailsModal = () => {
    //     setShowDetailsModal(true);
    //     // document.querySelector('.registration-page').classList.add('blur');
    // };

    // const closeDetailsModal = () => {
    //     setShowDetailsModal(false);
    // };

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
                        type="email"
                        name="name"
                        // onChange={(e) => setName(e.target.value)}
                        // id="name"
                        placeholder="Company Email"
                        required
                    />
                    <input
                        className="inputBox"
                        type="text"
                        name="business"
                        // onChange={(e) => setName(e.target.value)}
                        // id="name"
                        placeholder="Type of Businesses"
                        required
                    />
                    <input
                        className="inputBox"
                        type="text"
                        name="employees"
                        // onChange={(e) => setName(e.target.value)}
                        // id="name"
                        placeholder="Number of Employees"
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
                    <input
                        className="inputBox"
                        type="text"
                        name="confirm-password"
                        // onChange={(e) => setName(e.target.value)}
                        // id="name"
                        placeholder="Confirm Password"
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

                        
                            <Link to="/company-login" className="registerButton">
                                <button>Register</button>
                            </Link>
                            {/* {showDetailsModal && <DetailsModal closeModal={closeDetailsModal} />} */}
                        

                    <Link to="/login">
                        <h3>Already have an account? Login</h3>
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default CompanyRegister
