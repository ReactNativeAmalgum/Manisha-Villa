import React from 'react'
import '../../index.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { Image } from 'antd';
import manish1Img from '../../Assets/Images/Manisha1/indexManish1';
import manish2Img from '../../Assets/Images/Manisha2/IndexMansihs2';
import '../../App.css'


export default function SubGallery() {
  const images = [
    manish1Img.BAR1,
    manish1Img.BED1,
    manish1Img.BED2,
    manish1Img.BED3,
    manish1Img.GATE1,
    manish1Img.GALLERY1,
    manish1Img.JAIL1,
    manish1Img.MANDIR1,
    manish1Img.MED1,
    manish1Img.OFFICE1,
    manish1Img.SWIM1,
    manish1Img.GALLERY1,
    manish2Img.KITCHEN1,
    manish2Img.REST,
    manish1Img.MARKET

  ];
  return (
    <div className="video-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="video-frame">
              <Swiper
                style={{ backgroundColor: 'transparent' }}
                spaceBetween={10}
                slidesPerView={1} // Default to 2 slides
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                  // When the screen width is <= 768px
                  768: {
                    slidesPerView: 2, // Show 1 slide
                  },
                  1024:{
                    slidesPerView: 2
                  },
                  1440:{
                    slidesPerView:2
                  }
                }}
              >
                {images.map((image, index) => (
                  <SwiperSlide style={{ height: 'auto' }} key={index}>
                    <div style={{ width: '100%', height: 400, overflow: 'hidden' }}>
                      <Image
                        src={image}
                        height={'100%'}
                        className='slide-images'
                        alt={`Slide ${index + 1}`}
                      />
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
