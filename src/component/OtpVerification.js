import React from 'react'
import Image from "./Image"
import RegisterHero from './RegisterHero';
import OtpInput from './OtpInput';
import { useState } from 'react';



export  function OtpVerification() {
  // let [otp, setOtp] = useState('654321');
  const [otp, setOtp] = useState('');
  
  const onChange = (value: string) => setOtp(value);

  return (
    <>
      <Image />
      <RegisterHero />
      <OtpInput value={otp} valueLength={6} onChange={onChange} />      
    </>
  );
}
