import React from 'react';
import "./navbar.scss";
import ContentWrapper from '../ContentWrapper/ContentWrapper';

import Logo from "../../logo1.png";

const Navbar = () => {
  return (
    <div className="navbar">
        <ContentWrapper>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <ul className="menuItems">
                <li className="menuItem">About</li>
                <li className="menuItem">Contact Us</li>
            </ul>
            
        </ContentWrapper>
        <button className="btnLogin">Log in</button>
    </div>
  )
}

export default Navbar;
