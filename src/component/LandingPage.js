import React from 'react';
import logoImage from '../logo1.png';
import RegisterHero from './RegisterHero';
import sideImage from '../s2.png';
import Button from "./Button";

export function LandingPage() {
  return (
    <>
    <div className='row'>
    <img src={logoImage} alt="Logo" style={{height:"100px", marginLeft:"-400px" ,marginTop:'-140px', position:'absolute' }}/>
        <Button type="button" content="Login" style={{position:'relative'}}/>
        </div>
          <RegisterHero style={{ marginButtom:'-240px!important',position:'absolute'}}/>
        <div className="column">
          <img src={sideImage} alt="SideImage" />
        </div>
    </>
  );
}
