import React from 'react'
import '../../Pages/About.css'
import manish1Img from '../../Assets/Images/Manisha1/indexManish1'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';

export default function AboutUsSection() {
    return (
        <div style={{ marginBottom: '5%' }} className="single-property section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="main-image">
                            <img src={manish1Img.GALLERY3} alt="" />
                        </div>
                        <div className="main-content">
                            <span className="category">Bunglow</span>
                            <h4>Manisha 1 - A Versatile Filming Destination</h4>
                            <p>
                                Manisha 1 provides a wide selection of ready-to-use filming locations, making it a top-tier option for any production. Whether you're seeking a spiritual setting like a <strong>Mandir</strong>, the rustic charm of a <strong>Wooden Cottage</strong>, or the realism of a fully equipped <strong>Police Station</strong>, this property has it all. The serene <strong>Garden</strong> adds a touch of natural beauty, while the lively <strong>Gaming Area</strong> and expansive <strong>Hall</strong> cater to more dynamic scenes. Indoors, the property features a professional <strong>Office Setup</strong>, an elegant <strong>Lounge Bar</strong>, and a contemporary <strong>Kitchen</strong>, offering endless possibilities for various shoot requirements. To ensure a comfortable and efficient production experience, Manisha 1 also offers multiple <strong>Makeup Rooms</strong>, <strong>Dressing Rooms</strong>, and several cozy <strong>bedrooms</strong> for the entire crew.<br />
                                <br />
                                Tailored specifically for film productions, Manisha 1 offers unmatched convenience and versatility all in one place. With unique settings like a tranquil <strong>Mandir</strong>, a quaint <strong>Wooden Cottage</strong>, and a realistic <strong>Police Station</strong>, this property is ready to accommodate a wide variety of scenes. The beautifully landscaped <strong>Garden</strong> is perfect for outdoor shoots, while the lively <strong>Gaming Area</strong> and spacious <strong>Hall</strong> provide ideal backdrops for energetic moments. Inside, the location includes a fully furnished <strong>Office Setup</strong>, a sophisticated <strong>Lounge Bar</strong>, and a well-equipped <strong>Kitchen</strong>, making it suitable for all types of indoor settings. With multiple <strong>Makeup Rooms</strong>, <strong>Dressing Rooms</strong>, and several <strong>bedrooms</strong>, your crew will have everything they need for a seamless, stress-free shoot.                                </p>
                        </div>
                        <h4>Terms*</h4>

                        <div className='main-content'>
                            <ul>
                                <li>
                                    For Unlimited Soft Drinks, Tea, coffee, Wate, Moctails, & Popcorn just at <b>Rs.45000/-</b>
                                </li>
                                <li>
                                    Per Person For Buffet <b>2 Breakfast</b> & <b>1 Lunch</b> just at <b>Rs.300/-</b>

                                </li>
                                <li>
                                    Per Day For Gypspy / Qualis <b>without</b> Driver & Diesel just at <b>Rs. 2000/-</b>
                                </li>
                                <li>
                                    Electricity Load 25KW - <b>Rs.20/per unit</b>.
                                </li>
                                <li>
                                    Booking Advance <b>Rs.10,000/- Non Refundable Of Cancelled</b>.
                                </li>
                                <li>
                                    Per Day For Setting / Dismantle, <b>Staff</b> Changres <b>Rs.1500</b>/-

                                </li>
                                <li>
                                    Parking Available - YES Vanity Parking <b>Rs.2500/-</b>
                                </li>
                            </ul>
                        </div>
                        <h4>Account Details</h4>

                        <div className='main-content'>
                            <ul>
                                <li>
                                    GURUCOOL MANISSHA STUDIO
                                </li>
                                <li>
                                    GST.NO- <b>27AABPB3447P1ZL</b>

                                </li>
                                <li>
                                    PAN NO- <b>AABPB3447P</b>
                                </li>
                                <li>
                                    BANK DETAILS- <b>GURUCOOL MANISSHA STUDIO, HDFC BANK LTD</b>.
                                </li>
                                <li>
                                    KHAR WEST, MUMBAI-4000 052
                                </li>
                                <li>
                                    ACCOUNT NO- <b>50200088586644</b>,

                                </li>
                                <li>
                                    IFSC CODE- <b>HDFC0000490</b>
                                </li>
                                <li>
                                    GPAY NUMBER- <b>+91 8657036566</b>
                                </li>
                                <li>
                                    BOOKING CONTACT- VIJAY PATEL- (<b>+91 9819752405</b>) / ARVIND PATEL- <b>+91 9930434144</b>

                                </li>
                            </ul>
                        </div>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        Premier Bungalow for Unforgettable Shoots
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Manisha 1 stands out with its exceptional range of film-ready locations, including a peaceful Mandir, rustic Wooden Cottage, and a fully detailed Police Station. These diverse settings, along with beautifully maintained outdoor spaces like the Garden, ensure that filmmakers have access to stunning backdrops that will leave a lasting impression on the screen. With its versatility and beauty, Manisha 1 elevates any production to unforgettable heights.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        Streamlining Production for a Flawless Experience
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Manisha 1 is designed to make the filming process as smooth as possible. The property includes essential facilities such as Makeup Rooms, Dressing Rooms, and comfortable bedrooms, ensuring your crew has the necessary amenities for an efficient workflow. Additionally, with indoor sets like a fully equipped Kitchen, a professional Office Setup, and an elegant Lounge Bar, the location provides everything needed to support a flawless production from start to finish.


                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        The Ideal Choice for Your Upcoming Project
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Manisha 1 offers unmatched versatility, making it the perfect choice for a wide range of film projects. Whether your production needs outdoor scenes in the Garden, dynamic spaces like the Gaming Area, or interior shots in a contemporary Kitchen or stylish Lounge Bar, Manisha 1 provides an all-in-one solution. Its variety of unique settings ensures that no matter the style or scale of your project, this location can meet your creative vision with ease.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="info-table">
                            <ul>
                                <li>
                                    <img
                                        src="https://themewagon.github.io/VillaAgency/assets/images/info-icon-01.png"
                                        alt=""
                                        style={{ maxWidth: 52 }}
                                    />
                                    <h4>
                                        450 m2
                                        <br />
                                        <span>Total Flat Space</span>
                                    </h4>
                                </li>
                                <li>
                                    <img
                                        src="	https://themewagon.github.io/VillaAgency/assets/images/info-icon-02.png"
                                        alt=""
                                        style={{ maxWidth: 52 }}
                                    />
                                    <h4>
                                        Contract
                                        <br />
                                        <span>Contract Ready</span>
                                    </h4>
                                </li>
                                <li>
                                    <img
                                        src="https://themewagon.github.io/VillaAgency/assets/images/info-icon-03.png"
                                        alt=""
                                        style={{ maxWidth: 52 }}
                                    />
                                    <h4>
                                        Payment
                                        <br />
                                        <span>Payment Process</span>
                                    </h4>
                                </li>
                                <li>
                                    <img
                                        src="https://themewagon.github.io/VillaAgency/assets/images/info-icon-04.png"
                                        alt=""
                                        style={{ maxWidth: 52 }}
                                    />
                                    <h4>
                                        Safety
                                        <br />
                                        <span>24/7 Under Control</span>
                                    </h4>
                                </li>
                            </ul>
                        </div>
                        <div style={{ marginTop: '10%' }} className="info-table">
                            <h3 style={{ padding: 10, paddingBottom: 20 }}>Terms Of Shooting</h3>
                            <ul>
                                <li>

                                    <h4>
                                        Day Shoot - Sole
                                        <br />
                                        <span>9am To 9 pm Rs.20,000</span>
                                    </h4>
                                </li>
                                <li>

                                    <h4>
                                        Day Shoot - Join
                                        <br />
                                        <span>9am To 9pm Rs.10,000</span>
                                    </h4>
                                </li>
                                <li>

                                    <h4>
                                        Night Shoot
                                        <br />
                                        <span>9am To 8am Rs.10,000</span>
                                    </h4>
                                </li>

                            </ul>
                        </div>
                        <div style={{ marginTop: '10%' }} className="info-table">
                            <h3 style={{ padding: 10, paddingBottom: 20 }}>Features</h3>
                            <div className="manisha1-swiper-cont">
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
                                    modules={[Autoplay, Pagination, Mousewheel]}
                                    speed={1000}
                                >
                                    <SwiperSlide>
                                        <div className="manisha1-swiper-slide" style={{ height: '100%', overflowY: 'auto', textAlign: 'left' }}>
                                            <ul style={{ width: '100%', height: '100%', paddingLeft: 15 }}>
                                                <li>Mandir - <span>1</span></li>
                                                <li>Wooden Cottage - <span>1</span></li>
                                                <li>Police Station - <span>1</span></li>
                                                <li>Garden <span>1</span></li>
                                                <li>Gaming Area - <span>1</span></li>
                                                <li>Hall <span>1</span></li>
                                                <li>Office Set up - <span>1</span></li>
                                                <li>Number of rooms <span>2</span></li>
                                                <li>Lounge bar - <span>1</span></li>
                                                <li>Kitchen <span>1</span></li>
                                                <li>Hospital Setup - <span>1</span></li>
                                                <li>Dress room <span>2</span></li>
                                                <li>Makeup rooms <span>4</span></li>
                                            </ul>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}
