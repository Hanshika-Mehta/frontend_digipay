import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Otp () {
  const [otp, setOtp] = useState({ otp1: '', otp2: '', otp3: '', otp4: '', otp5: '' });

  const handleChange = (value, event) => {
    setOtp({ ...otp, [value]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(otp);
  };

  const inputfocus = (elmnt) => {
    if (elmnt.key === 'Delete' || elmnt.key === 'Backspace') {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      console.log('next');
      const next = elmnt.target.tabIndex;
      if (next < 5) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="otpContainer">
        <input
          name="otp1"
          type="text"
          autoComplete="off"
          className="otpInput"
          value={otp.otp1}
          onChange={(e) => handleChange('otp1', e)}
          tabIndex="1"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
        />
        <input
          name="otp2"
          type="text"
          autoComplete="off"
          className="otpInput"
          value={otp.otp2}
          onChange={(e) => handleChange('otp2', e)}
          tabIndex="2"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
        />
        <input
          name="otp3"
          type="text"
          autoComplete="off"
          className="otpInput"
          value={otp.otp3}
          onChange={(e) => handleChange('otp3', e)}
          tabIndex="3"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
        />
        <input
          name="otp4"
          type="text"
          autoComplete="off"
          className="otpInput"
          value={otp.otp4}
          onChange={(e) => handleChange('otp4', e)}
          tabIndex="4"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
        />
        <input
          name="otp5"
          type="text"
          autoComplete="off"
          className="otpInput"
          value={otp.otp5}
          onChange={(e) => handleChange('otp5', e)}
          tabIndex="5"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
        />
      </div>
      <Button className="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Otp;