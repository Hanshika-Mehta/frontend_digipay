import React, { useState } from 'react';
import "./governmentDashboard.scss"
import LeftProfile from '../../components/LeftProfile/LeftProfile';
import { CgBell } from 'react-icons/cg';
import RightProfile from '../../components/RightProfile/RightProfile';
import CreateVoucher from '../../modals/createVoucher/CreateVoucher';

const GovernmentDashboard = () => {
    const [showCreateVoucher, setShowCreateVoucher] = useState(false);

    const openCreateVoucher = () => {
        setShowCreateVoucher(true);
    };

    const closeCreateVoucher = () => {
        setShowCreateVoucher(false);
    };

    return (
        <div className="governmentContainer">
            <LeftProfile />

            <div className="governCenter">
                <div className="governHeading">
                    <h2 style={{ marginRight: "20px" }}>Government Dashboard</h2>
                    <CgBell />
                </div>
                <div className="vouchers">
                <div className={`createVoucher ${showCreateVoucher}`}>
                        <p onClick={openCreateVoucher}>Create <br />Vouchers</p>
                        {showCreateVoucher && <CreateVoucher closeModal={closeCreateVoucher} />}
                    </div>
                    <div className="distributeVoucher">
                        <p>Distribute <br />Vouchers</p>
                    </div>
                </div>

                <div className="governInfo">
                    <div className="gInfo1">
                        <button className="gbtn-1">Reward Points</button>
                        <button className="gbtn-2">Analysis</button>
                        <button className="gbtn-1">Transaction History</button>
                    </div>

                    <div className="gInfo2">
                        <div className="outerCircle">

                            <div className="innerCircle">
                                <div className="text">
                                    Distribute Analysis
                                </div>
                            </div>
                        </div>

                        <div className="graphInfo">
                            <div className="info1">
                                <span style={{ color: "#ff9f40" }}>•</span>
                                <p style={{ fontSize: "13px" }}>Avas Yojana</p>
                                <h3 style={{ fontSize: "16px", marginLeft: "10px" }}>33%</h3>
                            </div>
                            <div className="info1">
                                <span style={{ color: "#f4be37" }}>•</span>
                                <p style={{ fontSize: "13px" }}>Fertilizer</p>
                                <h3 style={{ fontSize: "16px", marginLeft: "10px" }}>5%</h3>
                            </div>
                            <div className="info1">
                                <span style={{ color: "#0d2535" }}>•</span>
                                <p style={{ fontSize: "13px" }}>Hospital</p>
                                <h3 style={{ fontSize: "16px", marginLeft: "10px" }}>30%</h3>
                            </div>
                            <div className="info1">
                                <span style={{ color: "#5388d8" }}>•</span>
                                <p style={{ fontSize: "13px" }}>Utilities</p>
                                <h3 style={{ fontSize: "16px", marginLeft: "10px" }}>32%</h3>
                            </div>
                        </div>
                    </div>

                    <div className="ginfo3">
                        <div className="outerCircle">
                            <div className="innerCircle">
                                <div className="text">
                                    Expiry <br/> Analysis
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <RightProfile />
        </div>
    )
}

export default GovernmentDashboard;
