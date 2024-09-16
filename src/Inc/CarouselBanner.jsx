import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./banner.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import banner1 from '../Components/Assets/banner1.jpg'
import banner2 from '../Components/Assets/banner2.jpg'
import banner3 from '../Components/Assets/banner3.jpg'

const CarouselBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    interval: 3000, // This replaces `autoplaySpeed` from react-slick
    pause: 'hover', // Pause on hover
    controls: true, // Show controls if needed
    indicators: true, // Show indicators if needed
  };

  const moreAbout = () => {
    return (
      <div className="booknow-circle-cont">
        <Link to={"/contact"} style={{ textDecoration: "none" }}>
          <div className="banner-book-now">
            <span> Book Now</span>
          </div>

          <div className="book-now-circle">
            <FaArrowRight />
          </div>
        </Link>
      </div>
    );
  };

  const moreAbout2 = () => {
    return (
      <div className="booknow-circle-cont">
        <Link to={"/contact"} style={{ textDecoration: "none" }}>
          <div className="banner-book-now2">
            <span> Book Now</span>
          </div>
        </Link>
      </div>
    );
  };

  const slides = [
    {
      id: 1,
      img: banner1,
      text: "Villa For Shoot",
      text2: "A luxury space for every photo and film project",
    },
    {
      id: 2,
      img: banner2,
      text: "Capture Perfection at Our Villa",
      text2: "An exclusive location designed for stunning shoots",
    },
    {
      id: 3,
      img: banner3,
      text: "Where Every Shot Finds Its Scene",
      text2: "The ideal backdrop for your creative vision",
    }
  ];

  return (
    <div style={{ paddingLeft: 0, paddingRight: 0, borderRadius: 0 }} className="carousel-container">
      <Carousel
        data-bs-theme="dark"
        onSelect={(selectedIndex) => setCurrentSlide(selectedIndex)}
        interval={settings.interval}
        pause={settings.pause}
        controls={settings.controls}
        indicators={settings.indicators}
      >
        {slides.map((slide) => (
          <Carousel.Item  key={slide.id}>
            <img
              style={{ paddingLeft: 0, paddingRight: 0, borderRadius: 0 }}
              className="d-block w-100 slider-img"
              src={slide.img}
              alt={`Slide ${slide.id}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="text-box">
      <span style={{backgroundColor:'white', color:'black',padding:10,fontWeight:500}} class="category">Manisha, <span style={{color:'#f35525'}}>Villa</span></span>
        <h3 className="txt-h3">{slides[currentSlide].text}</h3>
        {/* <h2>{slides[currentSlide].text2}</h2> */}
        {/* <div className="moreAbout">{moreAbout()}</div> */}
        {/* <div className="moreAbout2">{moreAbout2()}</div> */}
      </div>
    </div>
  );
};

export default CarouselBanner;
