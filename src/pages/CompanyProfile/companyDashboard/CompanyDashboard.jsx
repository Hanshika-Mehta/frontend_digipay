import React, { useState } from 'react';
import "./companyDashboard.scss";
// import { Link } from 'react-router-dom';
import Coupon from "../../../assets/upi.png";
import LeftProfile from '../../../components/LeftProfile/LeftProfile';
import RightProfile from '../../../components/RightProfile/RightProfile';
import DepartmentModal from '../../../modals/departmentModal/DepartmentModal';

const CompanyDashboard = () => {

    const [showDeptModal, setShowDeptModal] = useState(false);

    const openDeptModal = () => {
        setShowDeptModal(true);
    };

    const closeDeptModal = () => {
        setShowDeptModal(false);
    };

    return (
        <div className="companyDashboard">
            <LeftProfile />
            <div className="companyDashboardCenter">
                <div className="centerHeading">
                    <h2 style={{ color: "#3f4040" }}>Profile</h2>
                    <div className="heading2">
                        <h4 style={{ color: "#59c59d", fontSize: "12px" }}>Current Balance</h4>
                        <h2 style={{ color: "#3f4040" }}>44,500.00</h2>
                    </div>
                </div>

                <div className="coupons">
                    <h2 style={{ textAlign: "left", color: "#3f4040" }}>Request for Vouchers</h2>
                    <div className="voucherColumn1">
                        <div className={`voucher ${showDeptModal}`}>
                            <img src={Coupon} alt="" onClick={openDeptModal} />
                            {showDeptModal && <DepartmentModal closeModal={closeDeptModal} />}
                            <p style={{ fontWeight: "600", marginTop: "15px" }}>Worth ₹ 500</p>
                        </div>
                        <div className="voucher">
                            <img src={Coupon} alt="" />
                            <p style={{ fontWeight: "600", marginTop: "15px" }}>Worth ₹ 1000</p>
                        </div>
                    </div>
                    <div className="voucherColumn2">
                        <div className="voucher">
                            <img src={Coupon} alt="" />
                            <p style={{ fontWeight: "600", marginTop: "15px" }}>Worth ₹ 5000</p>
                        </div>
                        <div className="voucher">
                            <img src={Coupon} alt="" />
                            <p style={{ fontWeight: "600", marginTop: "15px" }}>Worth ₹ 10000</p>
                        </div>
                    </div>
                </div>
            </div>
            <RightProfile />
        </div>
    )
}

export default CompanyDashboard;
