import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../1.jpg';
import Image2 from '../2.jpg';
import Image3 from '../3.jpg';
import Image4 from '../4.jpg';
import Image5 from '../5.jpg';

export default function CarouselComponent() {
  return (
    <div style={{marginLeft:'-120px' , marginTop:"00px",marginBottom:'50px' ,display: 'block' ,position:'absolute',height:'800px' , width:'1700px' , backgroundColor:'white' , padding:'20px'}}>
    <Carousel style={{height:'500px', width:'1600px',marginRight:'10px'}}>
        <Carousel.Item interval={1500}>
        <img
        className="d-block w-100"
        src={Image1}
        alt="Image One"
      />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
        <img
        className="d-block w-100"
        src={Image2}
        alt="Image Two"
      />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
        <img
        className="d-block w-100"
        src={Image3}
        alt="Image three"
      />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
        <img
        className="d-block w-100"
        src={Image4}
        alt="Image Four"
      />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
        <img
        className="d-block w-100"
        src={Image5}
        alt="Image Five"
      />

        </Carousel.Item>
      </Carousel>
    </div>
  );
}
