import React from 'react'
import "./home.scss";
import BannerImg from "../../src/s2.png";
import { HiArrowSmRight } from "react-icons/hi";
import {
    FaFacebook,
    FaInstagram,
    FaTwitter
} from "react-icons/fa";
import FooterImage from "../../src/1.jpg"

const LandingPage = () => {
    return (
        <>
            <div className="banner">
                <div className="content">
                    <div className="text-content">
                        <h4>Digi Pay</h4>
                        <h1>Experience <br /> hassle-free Transaction</h1>
                        <p>Experience simple, secure, and stress-free Transaction. Say goodbye to long queues and complex procedures and hello to hassle-free payments with Digi Pay</p>
                        <button className="cta">Register</button>
                    </div>
                    <img src={BannerImg} alt="" className="bannerImg" />
                </div>
            </div>

            <div className="faq">
                <div className="quesLeft">
                    <h1>FAQ's</h1>
                    <h2>How do I sign up for an account with <br />Digi Pay?</h2>
                    <p>You can sign up for an account with Digi Pay online by visiting our website and <br /> and filling out the online application form</p>
                </div>
                <div className="quesRight">
                    <h3>What types of account does Digi Pay offer? <HiArrowSmRight /></h3>
                    <h3>Is Digi Pay FDIC insured <HiArrowSmRight className="arrowIcon" /></h3>
                    <h3>How can I access my Digi Pay account online? <HiArrowSmRight className="arrowIcon" /></h3>
                    <h3>What security measures does Digi Pay have in  <br /> in place to protectmy financial information <HiArrowSmRight className="arrowIcon" /></h3>
                </div>
            </div>

            <div className="services">
                <h1>Supported by various finance <br /> services</h1>
            </div>

            <div className="footer">
                <div className="footerLeft">
                    <div className="new1">
                        <h2>HELP</h2>
                        <p>Help Center</p>
                        <p>Contact Us</p>
                        <p>How to Use</p>
                    </div>

                    <div className="new2">
                        <h2>About</h2>
                        <p>About Digi Pay</p>
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                    </div>

                </div>

                

                <div className="footerRight">
                    <img src={FooterImage} alt="" />
                </div>
            </div>
        </>



    )
}

export default LandingPage
