import styled from "styled-components";
import { useState, useEffect } from "react";
import "./Css/Input.css"
import Button from "./Button";

function RegisterForm() {
  const initialValues = { name: "", phonenumber: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "name is required!";
    }
    if (!values.phonenumber) {
      errors.phonenumber = "phonenumber is required!";
    } 
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  

  return (
    <form onSubmit={handleSubmit}>
    <MainContainer>
    <WelcomeText style={{ fontSize: "36px", marginTop: "20px" }}>
        Register
      </WelcomeText>
      <InputContainer>
      <div className="div">
        <input className="input" style={{marginTop:'120px'}}
          type="text"
          name="name"
          placeholder="Name"
          value={formValues.name}
          onChange={handleChange}
        />
        <p>{formErrors.name}</p>
        <input className="input" 
          type="text"
          name="phonenumber"
          placeholder="Phone Number"
          value={formValues.phonenumber}
          onChange={handleChange}
        />
        <p>{formErrors.phonenumber}</p>
        <input className="input" style={{marginBottom:'20px'}}
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
        />
        <p>{formErrors.password}</p>
        </div>
      </InputContainer>
      <br />
      <CheckboxContainer>
        <Checkbox
          type="checkbox"
          id="termsCheckbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <CheckboxLabel htmlFor="termsCheckbox" style={{ margin: "20px" }}>
          <h4 style={{ fontFamily: "inherit", fontSize: "15px" }}>
            I accept the Terms and Conditions
          </h4>
        </CheckboxLabel>
      </CheckboxContainer>
      <ButtonContainer>
        <Button content="Register" />
      </ButtonContainer>
      <h3 style={{ color: "black", fontSize: "12px" }}>
        Already have an account? Login
      </h3>
    </MainContainer>
    </form>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
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
    height: 80vh;
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

const CheckboxContainer = styled.div`
  display: flex;
  align-items: left;
  margin-top: 3rem;
  font-family: cursive;
  margin-left: 150px;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const CheckboxLabel = styled.label`
  font-size: 10px;
  width: 400px;
  color: black;
  font-weight: bold;
  margin-top: 20px;
  font-family: sans-serif;
`;

export default RegisterForm;
