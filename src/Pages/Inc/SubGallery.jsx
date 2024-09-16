import React from 'react'
import videoFrame from '../../Components/Assets/banner1.jpg'
import '../../index.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import bar from '../../Components/Assets/bar.jpg'
import jail from '../../Components/Assets/jailbar.jpg'
import jailoffice from '../../Components/Assets/jail office 1.jpg'
import hosipital from '../../Components/Assets/hospital.jpg'
import hospoffice from '../../Components/Assets/hospital office2.jpg'
import gate from '../../Components/Assets/gate.jpg'
import swimming from '../../Components/Assets/swimming.jpg'
import temple from '../../Components/Assets/temple.jpg'
import bed from '../../Components/Assets/bed1.jpg'
import kitchen from '../../Components/Assets/kitchen.jpg'
import { Image } from 'antd';



export default function SubGallery() {
  const images = [
    bar,
    jail,
    jailoffice,
    hosipital,
    hospoffice,
    gate,
    swimming,
    temple,
    bed,
    kitchen
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
