import React from 'react';
import "./rightProfile.scss";
import { AiOutlineArrowRight, AiOutlineSearch } from "react-icons/ai";
import { CgBell } from "react-icons/cg";
import ProfilePic from "../../assets/dbs2.jpg"

const RightProfile = () => {
    return (
        <div className="dashRight">
            <div className="rightUpper">
                <div className="rightUpperOld">
                    <AiOutlineSearch />
                    <h4 style={{ marginLeft: "6px", fontSize: "12px", color: "#8d8d8d" }}>Search</h4>
                </div>
                <div className="rightUpperNew">
                    <CgBell style={{ marginRight: "15px" }} />
                    <img src={ProfilePic} alt="" className="profilePic" />
                </div>
            </div>


            <div className="rightLower">
                <div className="lastHeading">
                    <h3 style={{ fontSize: "15px", color: "#3f4040" }}>Transactions</h3>
                    <AiOutlineArrowRight style={{ marginRight: "13px", color: "#59c59d", cursor: "pointer" }} />
                </div>

                <div className="transactions">
                    <div className="details">
                        <h3 style={{ color: "#8d8d8d" }}>Oluwaben Jamin</h3>
                        <h3 style={{ color: "#8d8d8d" }}>06.Mar.2023 - 09:39</h3>
                        <h3 style={{ color: "#e74f5b" }}>-10,000.00</h3>
                    </div>
                    <div className="details">
                        <h3 style={{ color: "#8d8d8d" }}>Oluwaben Jamin</h3>
                        <h3 style={{ color: "#8d8d8d" }}>06.Mar.2023 - 09:39</h3>
                        <h3 style={{ color: "#47be92" }}>+10,000.00</h3>
                    </div>
                    <div className="details">
                        <h3 style={{ color: "#8d8d8d" }}>Oluwaben Jamin</h3>
                        <h3 style={{ color: "#8d8d8d" }}>06.Mar.2023 - 09:39</h3>
                        <h3 style={{ color: "#e74f5b" }}>-10,000.00</h3>
                    </div>
                    <div className="details">
                        <h3 style={{ color: "#8d8d8d" }}>Oluwaben Jamin</h3>
                        <h3 style={{ color: "#8d8d8d" }}>06.Mar.2023 - 09:39</h3>
                        <h3 style={{ color: "#47be92" }}>+10,000.00</h3>
                    </div>
                    <div className="details">
                        <h3 style={{ color: "#8d8d8d" }}>Oluwaben Jamin</h3>
                        <h3 style={{ color: "#8d8d8d" }}>06.Mar.2023 - 09:39</h3>
                        <h3 style={{ color: "#e74f5b" }}>-10,000.00</h3>
                    </div>
                    <div className="details">
                        <h3 style={{ color: "#8d8d8d" }}>Oluwaben Jamin</h3>
                        <h3 style={{ color: "#8d8d8d" }}>06.Mar.2023 - 09:39</h3>
                        <h3 style={{ color: "#47be92" }}>+10,000.00</h3>
                    </div>
                    <div className="details">
                        <h3 style={{ color: "#8d8d8d" }}>Oluwaben Jamin</h3>
                        <h3 style={{ color: "#8d8d8d" }}>06.Mar.2023 - 09:39</h3>
                        <h3 style={{ color: "#e74f5b" }}>-10,000.00</h3>
                    </div>
                    <div className="details">
                        <h3 style={{ color: "#8d8d8d" }}>Oluwaben Jamin</h3>
                        <h3 style={{ color: "#8d8d8d" }}>06.Mar.2023 - 09:39</h3>
                        <h3 style={{ color: "#47be92" }}>+10,000.00</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightProfile;
