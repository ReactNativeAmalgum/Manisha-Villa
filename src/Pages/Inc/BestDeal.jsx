import React from 'react'
import deal from '../../Components/Assets/best-deal.jpg'
import { FaCalendar } from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from 'swiper/modules';

import './BestDeal.css'
import { useNavigate } from 'react-router';

export default function BestDeal() {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/contact')
    }
    return (
        <div className="section best-deal">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="section-heading">
                            <h6>| Specifications</h6>
                            <h2>What do we provide</h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="tabs-content">
                            <div className="row">
                                <div className="nav-wrapper ">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="manisha1-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#manisha1"
                                                type="button"
                                                role="tab"
                                                aria-controls="manisha1"
                                                aria-selected="true"
                                            >
                                                Manisha 1
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="manisha2-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#manisha2"
                                                type="button"
                                                role="tab"
                                                aria-controls="manisha2"
                                                aria-selected="false"
                                            >
                                                Manisha 2
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content" id="myTabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="manisha1"
                                        role="tabpanel"
                                        aria-labelledby="manisha1-tab"
                                    >
                                        <div className="row">
                                            <div className="custom-left-col col-lg-3">
                                                <Swiper
                                                    spaceBetween={10}
                                                    slidesPerView={1}

                                                    loop={true}
                                                    pagination={{ clickable: true }}
                                                    style={{ height: '100%' }}
                                                    mousewheel={true}
                                                    autoplay={{
                                                        delay: 3000,
                                                        // disableOnInteraction:true,
                                                    }}
                                                    modules={[Autoplay, Pagination]}
                                                    speed={1000}

                                                >
                                                    <SwiperSlide>
                                                        <div className="info-table" style={{ height: '100%', overflowY: 'auto' }}>
                                                            <ul>
                                                                <li>
                                                                    Total carpet area <span>185 m2</span>
                                                                </li>
                                                                <li>
                                                                    Garden <span>2</span>
                                                                </li>
                                                                <li>
                                                                    Hall <span>1</span>
                                                                </li>
                                                                <li>
                                                                    Number of rooms <span>3</span>
                                                                </li>
                                                                <li>
                                                                    Kitchen <span>1</span>
                                                                </li>
                                                                <li>
                                                                    Hospital <span>1</span>
                                                                </li>
                                                                <li>
                                                                    Dress room <span>1</span>
                                                                </li>
                                                                <li>
                                                                    Makeup rooms <span>2</span>
                                                                </li>
                                                                <li>
                                                                    Double balcony <span>yes</span>
                                                                </li>
                                                                <li>
                                                                    Payment Process <span>Bank</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </SwiperSlide>
                                                </Swiper>
                                            </div>
                                            <div className="col-lg-6">
                                                <img src={deal} alt="bestdeal" />
                                            </div>
                                            <div className="col-lg-3">
                                                <h4>Extra Info About Property</h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    do eiusmod tempor pack incididunt ut labore et dolore
                                                    magna aliqua quised ipsum suspendisse.
                                                    <br />
                                                    <br />
                                                    When you need free CSS templates, you can simply type
                                                    TemplateMo in any search engine website. In addition, you
                                                    can type TemplateMo Portfolio, TemplateMo One Page
                                                    Layouts, etc.
                                                </p>
                                                <div className="icon-button">
                                                    <a style={{ display: 'flex', width: 200 }} href="/contact">
                                                        <i className="fa fa-calendar"> <FaCalendar /> </i> Contact Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="tab-pane fade "
                                        id="manisha2"
                                        role="tabpanel"
                                        aria-labelledby="manisha2-tab"
                                    >
                                        <div className="row">
                                            <div className="custom-left-col col-lg-3">
                                                <Swiper
                                                    spaceBetween={10}
                                                    slidesPerView={1}

                                                    loop={true}
                                                    pagination={{ clickable: true }}
                                                    style={{ height: '100%' }}
                                                    mousewheel={true}
                                                    autoplay={{
                                                        delay: 3000,
                                                        // disableOnInteraction:true,
                                                    }}
                                                    modules={[Autoplay, Pagination]}
                                                    speed={1000}

                                                >
                                                    <SwiperSlide>
                                                        <div className="info-table" style={{ height: '100%', overflowY: 'auto' }}>
                                                            <ul>
                                                                <li>
                                                                    Total carpet area <span>185 m2</span>
                                                                </li>
                                                                <li>
                                                                    Garden <span>2</span>
                                                                </li>
                                                                <li>
                                                                    Hall <span>1</span>
                                                                </li>
                                                                <li>
                                                                    Number of rooms <span>3</span>
                                                                </li>
                                                                <li>
                                                                    Kitchen <span>1</span>
                                                                </li>
                                                                <li>
                                                                    Hospital <span>1</span>
                                                                </li>
                                                                <li>
                                                                    Dress room <span>1</span>
                                                                </li>
                                                                <li>
                                                                    Makeup rooms <span>2</span>
                                                                </li>
                                                                <li>
                                                                    Double balcony <span>yes</span>
                                                                </li>
                                                                <li>
                                                                    Payment Process <span>Bank</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </SwiperSlide>
                                                </Swiper>
                                            </div>
                                            <div className="col-lg-6">
                                                <img src={deal} alt="bestdeal" />
                                            </div>
                                            <div className="col-lg-3">
                                                <h4>Extra Info About Property</h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    do eiusmod tempor pack incididunt ut labore et dolore
                                                    magna aliqua quised ipsum suspendisse.
                                                    <br />
                                                    <br />
                                                    When you need free CSS templates, you can simply type
                                                    TemplateMo in any search engine website. In addition, you
                                                    can type TemplateMo Portfolio, TemplateMo One Page
                                                    Layouts, etc.
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
