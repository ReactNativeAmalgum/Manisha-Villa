import React from 'react'
import { FaPhoneVolume } from 'react-icons/fa'

export default function ContactPageSection() {
    return (
        <div className="contact-page section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h6>| Contact Us</h6>
                            <h2>Get In Touch With Our Agents</h2>
                        </div>
                        <p>
                            When you really need to download free CSS templates, please remember
                            our website TemplateMo. Also, tell your friends about our website.
                            Thank you for visiting. There is a variety of Bootstrap HTML CSS
                            templates on our website. If you need more information, please contact
                            us.
                        </p>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="item phone">
                                    <img
                                        src="https://themewagon.github.io/VillaAgency/assets/images/phone-icon.png"
                                        alt=""
                                        style={{ maxWidth: 52 }}
                                    />
                                    <h6>
                                    +91- 9819752405 / 9930434144 / 9820212609
                                        <br />
                                        <span>Phone Number</span>
                                    </h6>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="item email">
                                    <img
                                        src="https://themewagon.github.io/VillaAgency/assets/images/phone-icon.png"
                                        alt=""
                                        style={{ maxWidth: 52 }}
                                    />
                                    <h6>
                                        info@villa.co
                                        <br />
                                        <span>Business Email</span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <form id="contact-form" action="" method="post">
                            <div className="row">
                                <div className="col-lg-12">
                                    <fieldset>
                                        <label htmlFor="name">Full Name</label>
                                        <input
                                            type="name"
                                            name="name"
                                            id="name"
                                            placeholder="Your Name..."
                                            autoComplete="on"
                                            required=""
                                        />
                                    </fieldset>
                                </div>
                                <div className="col-lg-12">
                                    <fieldset>
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            pattern="[^ @]*@[^ @]*"
                                            placeholder="Your E-mail..."
                                            required=""
                                        />
                                    </fieldset>
                                </div>
                                <div className="col-lg-12">
                                    <fieldset>
                                        <label htmlFor="subject">Subject</label>
                                        <input
                                            type="subject"
                                            name="subject"
                                            id="subject"
                                            placeholder="Subject..."
                                            autoComplete="on"
                                        />
                                    </fieldset>
                                </div>
                                <div className="col-lg-12">
                                    <fieldset>
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            placeholder="Your Message"
                                            defaultValue={""}
                                        />
                                    </fieldset>
                                </div>
                                <div className="col-lg-12">
                                    <fieldset>
                                        <button
                                            type="submit"
                                            id="form-submit"
                                            className="orange-button"
                                        >
                                            Send Message
                                        </button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-12">
                        <div id="map">

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3768.2201845658815!2d72.838876!3d19.185582999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDExJzA4LjEiTiA3MsKwNTAnMjAuMCJF!5e0!3m2!1sen!2sin!4v1726298508900!5m2!1sen!2sin"
                                width="100%"
                                height="500px"
                                style={{
                                    border: 0,
                                    borderRadius: 10,
                                    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)"
                                }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
