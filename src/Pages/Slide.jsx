import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../assets/Images/home/banner01.png"
import banner2 from "../assets/Images/home/banner02.jpg"
import banner3 from "../assets/Images/home/banner03.jpg"
// import "./../BackgroundSlider/slider.css";

function Slide() {
  return (
    <>
        <>
    <div className='slider-section' style={{ width: '100vw', height: '640px' }}>
    <Carousel>
      <Carousel.Item interval={1000}>
          <img src={banner1} alt="" style={{ width: '100vw', height: '640px' }}/>
        <Carousel.Caption></Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src={banner2} alt="" style={{ width: '100vw', height: '640px' }}/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src={banner3} alt="" style={{ width: '100vw', height: '640px' }}/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>



    </>
  )
}

export default Slide