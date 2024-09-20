import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./banner.css";
import manish1Img from "../Assets/Images/Manisha1/indexManish1";
import { Fade, Slide } from "react-awesome-reveal";
import Navbar from '../Components/Routes/Navbar';

const CarouselBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    interval: 3000,
    pause: "hover",
    controls: true,
    indicators: true,
  };

  const slides = [
    {
      id: 1,
      img: manish1Img.BUFFEE,
      text: "Bunglow For Shoot",
      text2: "A luxury space for every photo and film project",
    },
    {
      id: 2,
      img: manish1Img.MANISHA1_1,
      text: "Capture Perfection at Our Bunglow",
      text2: "An exclusive location designed for stunning shoots",
    },
    {
      id: 3,
      img: manish1Img.SWIM1,
      text: "Where Every Shot Finds Its Scene",
      text2: "The ideal backdrop for your creative vision",
    },
  ];

  const getSlideDirection = (slideIndex) => {
    if (slideIndex === 0) return "left";
    if (slideIndex === 1) return "up";
    if (slideIndex === 2) return "right";
  };

  const getSlideDirection2 = (slideIndex) => {
    if (slideIndex === 0) return "right";
    if (slideIndex === 1) return "down";
    if (slideIndex === 2) return "left";
  };

  return (
    <div className="carousel-container">
      <div style={{position:'absolute', width:'100%'}}>
      <Navbar />
      </div>

      <Carousel
        data-bs-theme="dark"
        onSelect={(selectedIndex) => setCurrentSlide(selectedIndex)}
        interval={settings.interval}
        pause={settings.pause}
        controls={settings.controls}
        indicators={settings.indicators}
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img
              className="d-block w-100 slider-img"
              src={slide.img}
              alt={`Slide ${slide.id}`}
            />
            
            <div className="carousel-overlay" />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="text-box">
      
        <Slide direction={getSlideDirection2(currentSlide)} duration={2000} delay={500}>
          <span style={{ backgroundColor: "white", color: "black", padding: 10, fontWeight: 500 }} className="category">
            Manissha, <span style={{ color: "#f35525" }}>Bunglow</span>
          </span>
        </Slide>

        <Slide direction={getSlideDirection(currentSlide)} duration={2000} delay={500}>
          <h3 className="txt-h3">{slides[currentSlide].text}</h3>
        </Slide>
      </div>
    </div>
  );
};

export default CarouselBanner;
