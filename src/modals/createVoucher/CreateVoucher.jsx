import React from 'react';
import "./createVoucher.scss"
import { CgBell } from 'react-icons/cg';
import { RiArrowRightSLine } from 'react-icons/ri';

const CreateVoucher = ({closeModal}) => {

    return (
        <div className="createVoucherContainer">
            <div className="createVoucherWrapper">

            <div className="voucherHeading">
                <h2 style={{color: "black"}}>Create Vouchers</h2>
                <CgBell />
            </div>

            <div className="information">
                <div className="amount">
                    <h3 style={{color: "black"}}>Amount</h3>
                    <input
                        type="number"
                        name="number"
                        placeholder="Enter Amount"
                    />
                </div>
                <div className="purpose">
                    <h3 style={{color: "black"}}>Purpose</h3>
                    <RiArrowRightSLine />
                </div>
                <div className="purpose">
                    <h3 style={{color: "black"}}>Multiple / Single time use</h3>
                    <RiArrowRightSLine />
                </div>
                <div className="purpose">
                    <h3 style={{color: "black"}}>Expiry Date</h3>
                    <RiArrowRightSLine />
                </div>
                <div className="purpose">
                    <h3 style={{color: "black"}}>Scheme / Yojana</h3>
                    <RiArrowRightSLine />
                </div>
            </div>
            {/* <Link to="/government-dashboard"> */}
                
                <button onClick={closeModal}>Create Voucher</button>
            {/* </Link> */}
            
            </div>
        </div>
    )
}

export default CreateVoucher;
