import React from 'react';
import styled from 'styled-components';
import Logo from '../logo1.png';

const Image = () => {
    return (
      <ImageContainer>
        <LogoImage src={Logo} alt="Logo" />
      </ImageContainer>
    );
  };
  
const ImageContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 50px;
  padding: 30px;
  
`;
const LogoImage = styled.img`
  width: 200px; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */

`;

export default Image;

