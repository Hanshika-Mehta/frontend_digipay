import React from 'react';
import Navbar from './Navbar'
import Carousel from './CarouselComponent';
import 'bootstrap/dist/css/bootstrap.css';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import {
  Nav,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';


export default function LandingPage() {
  return (
    <>
      <div style={{ marginTop: '0px', marginLeft: '60px' }} >
        <Navbar />
        <Carousel className='z-0'/>
        <button type='button' variant="outline-success" classname = "carbtn">Get Started -></button>
      </div>
    </>
  )
}

