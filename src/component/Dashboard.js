import React from 'react'
import SideBar from './SideBar';
import TopBar from './TopBar';
import Logo from '../logo1.png';
import styled from 'styled-components';

export default function Dashboard() {
  return (
    <div>
    <LogoImage src={Logo} alt="Logo"  style={{marginTop:'350px', marginLeft:'-400px',padding:'0px'}}/>
      <SideBar style={{marginBottom:'50px'}}/>
      <TopBar style={{marginLeft:'200px', marginBottom:'-500px'}}/>
    </div>
  )
}

const LogoImage = styled.img`
  width: 200px; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */

`;

