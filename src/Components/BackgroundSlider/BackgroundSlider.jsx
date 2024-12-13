import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./../BackgroundSlider/slider.css";


function BackgroundSlider() {
  return (
    <>
    <div className='slider-section' style={{ width: 'auto', height: 'auto' }}>
    <Carousel>
      <Carousel.Item interval={1000}>
        <div className='slide1' text="First slide" style={{ width: '100vw'}}>
        <Carousel.Caption></Carousel.Caption>
        
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className='slide2' text="Second slide" style={{ width: '100vw'}}>
        <Carousel.Caption></Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className='slide3' text="Third slide"  style={{ width: '100vw' }}>
        <Carousel.Caption></Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
};

export default BackgroundSlider


