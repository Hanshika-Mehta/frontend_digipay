import React, { useState } from 'react';
import "./merchant.scss";
// import profilePic from "../../assets/dbs2.jpg";
// import QRImage from "../../assets/qrimage.png";
import ProfilePic from "../../assets/dbs2.jpg"
// import { MdOutlineQrCodeScanner } from "react-icons/md"
import { CgBell } from 'react-icons/cg';
import { IoMdQrScanner } from 'react-icons/io';
// import { BsShareFill } from "react-icons/bs";
import LeftProfile from '../../components/LeftProfile/LeftProfile';
import RightProfile from '../../components/RightProfile/RightProfile';
// import AmountModal from '../../modals/amountModal/AmountModal';

const Merchant = () => {
    const [showAmountModal, setShowAmountModal] = useState(false);

    // const gradientColors = colors.join(', ');

    const openAmountModal = () => {
        setShowAmountModal(true);
    };

    const closeAmountModal = () => {
        setShowAmountModal(false);
    };

    return (
        <div className="merchantContainer">
            <LeftProfile />

            <div className="merchantCenter">
                <div className="centerHeading">
                    <div className="heading1">
                        <h5 style={{ color: "#3f4040", fontSize: "12px", textAlign: "left" }}>Hello, Merchant Ram Prasad</h5>
                        <h2 style={{ color: "#3f4040", textAlign: "left", marginTop: "10px" }}>+91 7060504030</h2>
                    </div>
                    <div className="heading2">
                        <CgBell style={{ marginRight: "15px" }} size={20} />
                        <img src={ProfilePic} alt="" className="profilePic" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                    </div>
                </div>

                <div className="merchantInfo">
                    <div className="mInfo1">
                        <p style={{ fontSize: "15px" }}>Accept <br /> Payment</p>
                        <div className="qrIcon">
                            <IoMdQrScanner color="white" style={{ paddingTop: "4px", cursor: "pointer" }} size={25} />
                        </div>
                    </div>
                    {/* <span style={{borderBottom: "2px solid #cce3da"}}></span> */}
                    <div className="mInfo2">
                        <button className="btn-1">Reward Points</button>
                        <button className="btn-2">Analysis</button>
                        <button className="btn-1">Transaction History</button>



                        {/* <div className={`modal-NewAmountContainer ${showAmountModal}`}>
                            <button onClick={openAmountModal}>Scan QR <MdOutlineQrCodeScanner style={{ marginLeft: "6px" }} /></button>
                            {showAmountModal && <AmountModal closeModal={closeAmountModal} />}
                        </div>


                        <button className="btn2">Share QR <BsShareFill style={{ marginLeft: "6px" }} /></button> */}
                    </div>

                    <div className="mInfo3">
                        <div className="outerCircle">

                            <div className="innerCircle">
                                <div className="text">
                                    Customer Analysis
                                </div>
                            </div>
                        </div>

                        <div className="graphInfo">
                            <div className="info1">
                                <span style={{color: "#ff9f40"}}>•</span>
                                <p style={{fontSize: "13px"}}>Avas Yojana</p>
                                <h3 style={{fontSize: "16px", marginLeft: "10px"}}>33%</h3>
                            </div>
                            <div className="info1">
                                <span style={{color: "#f4be37"}}>•</span>
                                <p style={{fontSize: "13px"}}>Fertilizer</p>
                                <h3 style={{fontSize: "16px", marginLeft: "10px"}}>5%</h3>
                            </div>
                            <div className="info1">
                                <span style={{color: "#0d2535"}}>•</span>
                                <p style={{fontSize: "13px"}}>Hospital</p>
                                <h3 style={{fontSize: "16px", marginLeft: "10px"}}>30%</h3>
                            </div>
                            <div className="info1">
                                <span style={{color: "#5388d8"}}>•</span>
                                <p style={{fontSize: "13px"}}>Utilities</p>
                                <h3 style={{fontSize: "16px", marginLeft: "10px"}}>32%</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RightProfile />
        </div>
    )
}

export default Merchant;
