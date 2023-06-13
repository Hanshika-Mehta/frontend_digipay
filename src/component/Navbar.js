import React from 'react';
import styled from "styled-components";
import {
  Nav,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import Register from "./Register"
import Login from "./Login";

import Logo from '../logo1.png';
import Button from './Button';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <img src={Logo} alt="logo" style={{marginLeft:'-120px'}}/>
        <NavBtn>
        <NavBtnLink to='./Register'>Sign In</NavBtnLink>
        <NavBtnLink to='/Login'>Sign Up</NavBtnLink>
      </NavBtn>
      </Nav>
    </>
  );
};



const ButtonContainer = styled.div`
  margin: 0rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
`;
  
export default Navbar;