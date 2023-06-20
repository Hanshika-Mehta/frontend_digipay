import React, { useState, useEffect } from 'react';
import "./amountModal.scss";
import { CgClose } from "react-icons/cg";
import OTPPopup from '../otpModal/OTPPopup';
// import { Link } from 'react-router-dom';

const AmountModal = ({ closeModal }) => {
    const [showOtpModal, setShowOtpModal] = useState(false);

    const openOtpModal = () => {
        setShowOtpModal(true);
    };

    const closeOtpModal = () => {
        setShowOtpModal(false);
    };

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }
    }, []);

    
    return (
        <>
            <div className="amountWrapper">
                <div className="amountContainer">
                <div className="start">
                        <h2>Enter Amount</h2>
                        <CgClose onClick={closeModal} style={{cursor: "pointer"}}/>
                    </div>

                    <p style={{textAlign: "left", fontSize: "12px"}}>Enter amount</p>
                    <input type="number" name="amount" required />
                    <div className={`modalAmountContainer ${showOtpModal}`}>
                        <button onClick={openOtpModal}>Submit</button>
                        {showOtpModal && <OTPPopup closeModal={closeOtpModal} />}
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default AmountModal;
