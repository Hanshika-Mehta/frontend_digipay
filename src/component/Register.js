import React from "react";
import Image from "./Image";
import RegisterHero from "./RegisterHero";
import RegisterForm from "./RegisterForm";

function Register() {
  return (
    <>
      <Image />
      <RegisterHero style={{ marginTop: '140px'}}/>
      <RegisterForm />
    </>
  );
}

export default Register;
