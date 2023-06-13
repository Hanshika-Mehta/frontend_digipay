import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import "./Css/main.css"
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useMemo } from 'react';
import { RE_DIGIT } from './Constants';

var target;

function OtpInput({ value, valueLength, onChange }) {
  const valueItems = useMemo(() => {
    const valueArray = value.split('');
    const items: Array<string> = [];

    console.log("redgiti", RE_DIGIT)
    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];
      if (RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push('');
      }
    }
  
   

    const inputOnChange = (e, idx) => {
      target = e.target;
      const targetValue = target.value;

      if (!RE_DIGIT.test(targetValue)) {
        return;
      }

      const newValue = value.substring(0, idx) + targetValue + value.substring(idx + 1);

      onChange(newValue);
    };

    return { items, inputOnChange };
  }, [value, valueLength]);

  const { items, inputOnChange } = valueItems;

  return (
    <>
      <MainContainer>
        <WelcomeText style={{ fontSize: "36px", marginTop: "20px" }}>
          OTP Verification
        </WelcomeText>
        <div className="otp-group">
          {items.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              pattern="\d{1}"
              maxLength={valueLength}
              className="otp-input"
              onChange={(e) => inputOnChange(e, idx)}
              value={digit}
            />
          ))}
        </div>
        <ButtonContainer style={{marginTop:'50px'}}>
        <Button type="submit" content="Verify" />
      </ButtonContainer>
      <ButtonContainer style={{marginTop:'10px '}}>
      <Button type="submit" content="Resend OTP" />
    </ButtonContainer>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  width: 30vw;
  margin-left: 500px;
  background: rgba(255, 255, 255, 255);
  box-shadow: 0 8px 32px 0 rgba(51, 183, 134, 0.5);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  letter-spacing: 0;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 70vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
  color: rgb(51, 183, 134);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 0rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
`;



export default OtpInput;
