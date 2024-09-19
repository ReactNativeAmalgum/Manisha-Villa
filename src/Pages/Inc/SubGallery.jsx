import React from 'react'
import '../../index.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { Image } from 'antd';
import manish1Img from '../../Assets/Images/Manisha1/indexManish1';



export default function SubGallery() {
  const images = [
manish1Img.BAR1,
  ];
  return (
    <div className="video-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="video-frame">
              <Swiper
              style={{backgroundColor:'transparent'}}
                spaceBetween={10}
                slidesPerView={2}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
              >
                {images.map((image, index) => (
                  <SwiperSlide style={{backgroundColor:'transparent'}} key={index}>
                    <div style={{ width: '100%', height: '100%' }}>
                      <Image src={image} alt={`Slide ${index + 1}`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>

          </div>
        </div>
      </div>
    </div>

  )
}
