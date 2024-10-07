import React from 'react'
import { FaCalendar } from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from 'swiper/modules';

import './BestDeal.css'
import { useNavigate } from 'react-router';
import manish1Img from '../../Assets/Images/Manisha1/indexManish1';

export default function BestDeal() {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/contact')
    }
    return (
        <div className="section best-deal">
            <div className="container">
                <div className="row custom-row">
                    <div className="section-heading">
                        <h6>| Specifications</h6>
                        <h2>What do we provide</h2>
                    </div>
                    <div className="custom-left-col col-4 custom-bestdeal-col">
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            loop={true}
                            pagination={{ clickable: true }}
                            style={{ height: '100%' }}
                            mousewheel={true}
                            autoplay={{
                                delay: 3000,
                            }}
                            modules={[Autoplay, Pagination]}
                            speed={1000}
                        >
                            <SwiperSlide>
                                <div className="info-table" style={{ height: '100%', overflowY: 'auto' }}>
                                    <ul>
                                        <li>Total carpet area <span>185 m2</span></li>
                                        <li>Garden <span>2</span></li>
                                        <li>Hall <span>1</span></li>
                                        <li>Number of rooms <span>3</span></li>
                                        <li>Kitchen <span>1</span></li>
                                        <li>Hospital <span>1</span></li>
                                        <li>Dress room <span>1</span></li>
                                        <li>Makeup rooms <span>2</span></li>
                                        <li>Double balcony <span>yes</span></li>
                                        <li>Payment Process <span>Bank</span></li>
                                    </ul>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                    <div className="col-4 custom-bestdeal-col">
                        <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img
                                style={{ height: '100%', width: '100%', maxWidth: '100%', objectFit:'cover' }}
                                src={manish1Img.LIVINGROOM1}
                                alt="bestdeal"
                            />
                        </div>


                    </div>
                    <div className="col-4 custom-bestdeal-col property">
                        <h4>Extra Info About Property</h4>
                        <p>
                        Manisha Bungalow is thoughtfully crafted to accommodate both film shoots and various events, offering adaptable spaces that can be tailored to your specific requirements. With features like a tranquil garden, expansive halls, and modern amenities, the venue creates an inviting setting that fosters creativity and teamwork. Our attentive staff is always available to assist, ensuring that every aspect of your experience runs smoothly and efficiently.
                          
                          
                        </p>
                        <div className="icon-button">
                            <a style={{ display: 'flex', width: 200 }} href="/contact">
                                <i className="fa fa-calendar"> <FaCalendar /> </i> Contact Now
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}
