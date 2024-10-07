import React from "react";

import {
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaPhone,
  FaMapPin,
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";

import { Link, } from "react-router-dom";

import "./Footer.css";
import manish1Img from "../../Assets/Images/Manisha1/indexManish1";
import manish2Img from "../../Assets/Images/Manisha2/IndexMansihs2";

export default function Footer() {

  return (
    <>
      <section className="bottom-bar-cont">
        <div className="bar" />
        <div className="container">
          <div className="footer-row">
            <div className="footer-col-6">
              <h3 style={{ paddingTop: 5 }}>Abouts</h3>
              <p>
                At Manisha Bungalow, we offer exceptional filming locations with diverse settings and top-notch amenities. Whether for a film shoot or a private event, our properties provide the perfect backdrop for your creative vision.
              </p>
              <div className=" logo-cont">
                <img src={manish2Img.LOGO} />
              </div>
            </div>
            <div className="footer-nav-cont  col-2">
              <h3>General</h3>
              <p>
                <Link onClick={() => window.scrollTo(0, 0)} className="footer-nav-cont-p" to="/">
                  Home
                </Link>
              </p>
              <p>
                <Link onClick={() => window.scrollTo(0, 0)} className="footer-nav-cont-p" to="/about">
                  About
                </Link>
              </p>
              <p>
                <Link onClick={() => window.scrollTo(0, 0)} className="footer-nav-cont-p" to="/gallery">
                  Gallery
                </Link>
              </p>
              <p>
                <Link onClick={() => window.scrollTo(0, 0)} className="footer-nav-cont-p" to="/contact">
                  Contact Us
                </Link>
              </p>
            </div>
            <div className="footer-nav-cont col-2">
              <h3>Connect</h3>
              <div className="social">
                <FaFacebookF className="icon" /> <p>Facebook</p>
              </div>
              <div className="social">
                <FaInstagram className="icon" /> <p>Instagram</p>
              </div>
              <div className="social">
                <FaWhatsapp className="icon" /> <p>WhatsApp</p>
              </div>
            </div>
            <div className="footer-nav-cont col-2">
              <div className="speacial-h3">
                <h3>Contact Us</h3>
              </div>
              <div className="social">
                <CgMail className="icon" /> <p>demo@gmail.com</p>
              </div>
              <div className="social">
                <FaPhone className="icon" /> <p>+91- 919819752405 / +919930434144</p>
              </div>
              <div className="social">
                <FaMapPin className="icon" />{" "}
                <p>MANISSHA BUNGALOW
                  109, <br /> Master Wadi.
                  Main Road.<br />
                  Opposite Bus Stop
                  Near Hotel Retreat <br />
                  Madh Marve Road. <br />
                  Malad west.<br />
                  Mumbai 400 061</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="copywright">
          <p>2024 ©️ Manissha Studio | All rights reserved | #SKDM</p>
        </div>
      </section>
    </>
  );
}
