import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./dashboard.scss";
import Logo from "../../assets/logo1.png";
import ProfilePic from "../../assets/dbs2.jpg"
import R50 from "../../assets/R50.jpg";
import R100 from "../../assets/R100.jpg";
import R200 from "../../assets/R200.jpg";
import R500 from "../../assets/R500.jpg";
import { AiOutlineMenuUnfold, AiOutlineUser, AiFillFolderOpen, AiTwotoneBank, AiOutlineArrowRight, AiOutlineSearch } from "react-icons/ai";
import { TiShoppingBag } from "react-icons/ti";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { GrTransaction } from "react-icons/gr";
import { RiUserSharedFill } from "react-icons/ri";
import { MdOutlineSensorOccupied } from "react-icons/md";
import { CgBell } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaEnvelopeOpenText, FaBlenderPhone } from "react-icons/fa";

const Dashboard = () => {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
    }
    return (
        <div className="dashboardContainer">
            <div className="dashLeft">
                <img src={Logo} alt="" className="pic" />
                <ul className="sidebar">
                    <li className={`list-item ${isSelected ? 'selected' : ''}`}
                        onClick={handleClick}><AiOutlineMenuUnfold style={{ marginRight: "22px" }} size={25} /> Overview</li>
                    <li className={`list-item ${isSelected ? 'selected' : ''}`}
                        onClick={handleClick}><TiShoppingBag style={{ marginRight: "22px" }} size={25} />E-Rupi Vouchers</li>
                    <li className={`list-item ${isSelected ? 'selected' : ''}`}
                        onClick={handleClick}><GrTransaction style={{ marginRight: "22px", color: "#6a6b6b" }} size={25} />Transactions</li>
                    <li className={`list-item ${isSelected ? 'selected' : ''}`}
                        onClick={handleClick}><AiOutlineUser style={{ marginRight: "22px" }} size={25} />Profile</li>
                    <li className={`list-item ${isSelected ? 'selected' : ''}`}
                        onClick={handleClick}><AiFillFolderOpen style={{ marginRight: "22px" }} size={25} />Promotions</li>
                </ul>
                <div className="logout">
                    <Link to="/" className="linkstyle">
                        <HiOutlineArrowNarrowLeft style={{ marginRight: "30px" }} size={20} />
                        <p className="paraLogout">Logout</p>
                    </Link>
                </div>
            </div>

            <div className="dashCenter">
                <div className="centerHeading">
                    <h2 style={{color:"#3f4040"}}>Overview</h2>
                    <div className="heading2">
                        <h4 style={{ color: "#59c59d", fontSize: "12px" }}>Shweta Mehta</h4>
                        <h2 style={{color:"#3f4040"}}>1234567890</h2>
                    </div>
                </div>

                <div className="CAB">
                    <h3 style={{ textAlign: "left", color:"#3f4040"}}>Current Account Balance</h3>
                    <div className="start1">
                        <img src={Logo} alt="" className="CABpic" />
                        <div className="currentBalance">
                            <h4 style={{ fontSize: "12px", color: "#573b87" }}>Current Balance</h4>
                            <h2 style={{ fontSize: "16px", marginTop: "6px", color:"#3f4040" }}>44,500.00</h2>
                        </div>
                        <div className="wallet">
                            <h4 style={{ fontSize: "12px", color: "#573b87", textAlign: "center", cursor: "pointer" }}>Add Money to Wallet</h4>
                            <RiUserSharedFill style={{ marginTop: "6px" }} />
                        </div>
                        <div className="addToBank">
                            <h4 style={{ fontSize: "12px", color: "#573b87", cursor: "pointer" }}>Add Money to Wallet</h4>
                            <AiTwotoneBank style={{ marginTop: "6px" }} />
                        </div>
                    </div>
                </div>

                <div className="transferMoney">
                    <h3 style={{ textAlign: "left", color:"#3f4040" }}>Transfer Money</h3>
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
                        <h3 style={{color:"#3f4040"}}>Currencies</h3>
                        <h3 style={{color:"#8d8d8d"}}>show All <IoMdArrowDropdown /></h3>
                    </div>

                    <div className="notes">
                        <div className="note">
                            <img src={R50} alt="" />
                            <p style={{ marginTop: "15px", fontWeight: "600", color:"#3f4040" }}>50[3]</p>
                        </div>
                        <div className="note">
                            <img src={R100} alt="" />
                            <p style={{ marginTop: "15px", fontWeight: "600", color:"#3f4040" }}>100[2]</p>
                        </div>
                        <div className="note">
                            <img src={R200} alt="" />
                            <p style={{ marginTop: "15px", fontWeight: "600", color:"#3f4040" }}>200[5]</p>
                        </div>
                        <div className="note">
                            <img src={R500} alt="" />
                            <p style={{ marginTop: "15px", fontWeight: "600", color:"#3f4040" }}>500[4]</p>
                        </div>
                    </div>

                </div>

            </div>

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
                        <h3 style={{ fontSize: "15px", color:"#3f4040" }}>Transactions</h3>
                        <AiOutlineArrowRight style={{marginRight: "13px", color:"#59c59d", cursor:"pointer"}} />
                    </div>

                    <div className="transactions">
                        <div className="details">
                            <h3 style={{color:"#8d8d8d"}}>Oluwaben Jamin</h3>
                            <h3 style={{color:"#8d8d8d"}}>06.Mar.2023 - 09:39</h3>
                            <h3 style={{color:"#e74f5b"}}>-10,000.00</h3>
                        </div>
                        <div className="details">
                            <h3 style={{color:"#8d8d8d"}}>Oluwaben Jamin</h3>
                            <h3 style={{color:"#8d8d8d"}}>06.Mar.2023 - 09:39</h3>
                            <h3 style={{color:"#47be92"}}>+10,000.00</h3>
                        </div>
                        <div className="details">
                            <h3 style={{color:"#8d8d8d"}}>Oluwaben Jamin</h3>
                            <h3 style={{color:"#8d8d8d"}}>06.Mar.2023 - 09:39</h3>
                            <h3 style={{color:"#e74f5b"}}>-10,000.00</h3>
                        </div>
                        <div className="details">
                            <h3 style={{color:"#8d8d8d"}}>Oluwaben Jamin</h3>
                            <h3 style={{color:"#8d8d8d"}}>06.Mar.2023 - 09:39</h3>
                            <h3 style={{color:"#47be92"}}>+10,000.00</h3>
                        </div>
                        <div className="details">
                            <h3 style={{color:"#8d8d8d"}}>Oluwaben Jamin</h3>
                            <h3 style={{color:"#8d8d8d"}}>06.Mar.2023 - 09:39</h3>
                            <h3 style={{color:"#e74f5b"}}>-10,000.00</h3>
                        </div>
                        <div className="details">
                            <h3 style={{color:"#8d8d8d"}}>Oluwaben Jamin</h3>
                            <h3 style={{color:"#8d8d8d"}}>06.Mar.2023 - 09:39</h3>
                            <h3 style={{color:"#47be92"}}>+10,000.00</h3>
                        </div>
                        <div className="details">
                            <h3 style={{color:"#8d8d8d"}}>Oluwaben Jamin</h3>
                            <h3 style={{color:"#8d8d8d"}}>06.Mar.2023 - 09:39</h3>
                            <h3 style={{color:"#e74f5b"}}>-10,000.00</h3>
                        </div>
                        <div className="details">
                            <h3 style={{color:"#8d8d8d"}}>Oluwaben Jamin</h3>
                            <h3 style={{color:"#8d8d8d"}}>06.Mar.2023 - 09:39</h3>
                            <h3 style={{color:"#47be92"}}>+10,000.00</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;    