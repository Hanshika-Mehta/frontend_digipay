import React, { useState } from 'react';
import "./dashboard.scss";
import R50 from "../../assets/R50.jpg";
import R100 from "../../assets/R100.jpg";
import R200 from "../../assets/R200.jpg";
import R500 from "../../assets/R500.jpg";
import { MdOutlineSensorOccupied } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaEnvelopeOpenText, FaBlenderPhone } from "react-icons/fa";
import LeftProfile from '../../components/LeftProfile/LeftProfile';
import CenterProfile from '../../components/CenterProfile/CenterProfile';
import RightProfile from '../../components/RightProfile/RightProfile';

const Dashboard = () => {

    return (
        <div className="dashboardContainer">

            <LeftProfile />
            <div className="dashCenter">
                <div className="centerHeading">
                    <h2 style={{ color: "#3f4040" }}>Overview</h2>
                    <div className="heading2">
                        <h4 style={{ color: "#59c59d", fontSize: "12px" }}>Current Balance</h4>
                        <h2 style={{ color: "#3f4040" }}>44,500.00</h2>
                    </div>
                </div>

                <div className="CAB">
                    <h3 style={{ textAlign: "left", color: "#3f4040" }}>Current Account Balance</h3>
                    <CenterProfile />
                </div>

                <div className="transferMoney">
                    <h3 style={{ textAlign: "left", color: "#3f4040" }}>Transfer Money</h3>
                    <div className="start2">
                        <div className="box1">
                            <h4 className="transferHeading">E-Rupi <br />UPI ID</h4>
                            <MdOutlineSensorOccupied style={{ marginTop: "6px" }} />
                        </div>
                        <div className="box1">
                            <h4 className="transferHeading">Request <br />Money</h4>
                            <FaEnvelopeOpenText style={{ marginTop: "6px" }} />
                        </div>
                        <div className="box1">
                            <h4 className="transferHeading">E-Rupi <br />UPI ID</h4>
                            <FaBlenderPhone style={{ marginTop: "6px" }} />
                        </div>
                    </div>
                </div>

                <div className="currency">
                    <div className="thirdHeading">
                        <h3 style={{ color: "#3f4040" }}>Currencies</h3>
                        <h3 style={{ color: "#8d8d8d" }}>show All <IoMdArrowDropdown /></h3>
                    </div>

                    <div className="notes">
                        <div className="note">
                            <img src={R50} alt="" />
                            <p style={{ marginTop: "15px", fontWeight: "600", color: "#3f4040" }}>50[3]</p>
                        </div>
                        <div className="note">
                            <img src={R100} alt="" />
                            <p style={{ marginTop: "15px", fontWeight: "600", color: "#3f4040" }}>100[2]</p>
                        </div>
                        <div className="note">
                            <img src={R200} alt="" />
                            <p style={{ marginTop: "15px", fontWeight: "600", color: "#3f4040" }}>200[5]</p>
                        </div>
                        <div className="note">
                            <img src={R500} alt="" />
                            <p style={{ marginTop: "15px", fontWeight: "600", color: "#3f4040" }}>500[4]</p>
                        </div>
                    </div>
                </div>
            </div>
            <RightProfile />
        </div>
    )
}

export default Dashboard;    