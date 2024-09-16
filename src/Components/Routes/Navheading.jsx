import React from 'react'
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook, FaMap } from 'react-icons/fa';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from "react-icons/md";
import './Navheading.css'
export default function Navheading() {
    return (
        <div className="sub-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <ul className="info">
                            <li>
                            <MdEmail style={{color:'#f35525', fontSize:24}} /> info@company.com
                            </li>
                            <li>
                            <FaMap style={{color:'#f35525', fontSize:24}} /> Sawant Villa, Malad West Mumbai - 61
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <ul className="social-links">
                            <li>
                                <a className='navheading-social' href="#">
                                <FaFacebook />
                                </a>
                            </li>
                            <li>
                                <a className='navheading-social' href="https://x.com/minthu" target="_blank">
                                <FaXTwitter />
                                </a>
                            </li>
                            <li>
                                <a className='navheading-social' href="#">
                                <FaLinkedin />
                                </a>
                            </li>
                            <li>
                                <a className='navheading-social' href="#">
                                <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}
