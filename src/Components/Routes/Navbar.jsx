import React, { useState } from 'react';
import Navheading from './Navheading';
import { FaCalendar } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import './NavBar.css'
import '../../App.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, NavLink } from 'react-router-dom';
import imgs from '../../Assets/Images/Manisha1/indexManish1.js'
import manish1Img from '../../Assets/Images/Manisha1/indexManish1.js';
import manish2Img from '../../Assets/Images/Manisha2/IndexMansihs2.js';
export default function Navbars() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/contact');
        setIsMenuOpen(false)
    };

    const toggleMenu = () => {
        console.log('Menu toggle clicked');
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false)
    }
    return (
        <>
            {/* <Navheading /> */}
            <header style={{ backgroundColor: 'transparent' }} className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav style={{ backgroundColor: 'transparent' }} className="main-nav">
                                {/* ***** Logo Start ***** */}
                                <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} href="/" className="logo">
                                    <div style={{ width: 100, paddingBottom: 10 }}>
                                        <img src={manish2Img.LOGO} alt="Logo" />
                                    </div>
                                </a>
                                {/* ***** Logo End ***** */}
                                {/* ***** Menu Start ***** */}
                                <ul className={`nav ${isMenuOpen ? 'open' : ''}`}>
                                    <li>
                                        <a href="/" className="active">Home</a>
                                    </li>
                                    <li style={{ position: 'relative' }} className="dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Pages
                                        </a>


                                        <ul style={{ position: 'absolute' }} className="dropdown-menu special-dropmenu">
                                            <li onClick={closeMenu} className='special-li'>
                                                <NavLink
                                                    className="drop-navlink dropdown-item special-dropmenu"
                                                    to="/about"
                                                    style={({ isActive }) => ({
                                                        // color: isActive ? 'white' : '#f35525',
                                                        fontWeight: 500,
                                                        fontSize: 16,
                                                        borderRadius: 30,
                                                        // backgroundColor: isActive ? 'black' : 'orange',
                                                    })}
                                                >
                                                    Manissha 1
                                                </NavLink>
                                            </li>
                                            <li onClick={closeMenu} className='special-li'>
                                                <NavLink
                                                    className="drop-navlink dropdown-item special-dropmenu"
                                                    to="/manisha2"
                                                    style={({ isActive }) => ({
                                                        // color: isActive ? 'white' : '#f35525', 
                                                        fontSize: 16,
                                                        borderRadius: 30,
                                                        paddingLeft: 15,
                                                        // backgroundColor: isActive ? 'black' : 'orange', 
                                                    })}
                                                >
                                                    <span style={{ fontWeight: 400 }}>
                                                        Manissha 2
                                                    </span>
                                                </NavLink>

                                            </li>
                                        </ul>



                                    </li>

                                    <li style={{ position: 'relative' }} className="dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Galleries
                                        </a>
                                        <ul style={{ position: 'absolute' }} className="dropdown-menu">
                                            <li onClick={closeMenu}>
                                                <NavLink
                                                    className="drop-navlink dropdown-item"
                                                    to="/gallery"
                                                    style={({ isActive }) => ({
                                                        backgroundColor: isActive ? 'white' : 'transparent',
                                                        color: isActive ? 'white' : '#f35525',
                                                        fontWeight: 500,
                                                        fontSize: 16,
                                                        borderRadius: 30
                                                    })}
                                                >
                                                    Manissha 1
                                                </NavLink>
                                            </li>
                                            <li onClick={closeMenu}>
                                                <NavLink
                                                    className="drop-navlink dropdown-item manisha2"
                                                    to="/gallery2"
                                                    style={({ isActive }) => ({
                                                        backgroundColor: isActive ? 'white' : 'transparent',
                                                        color: isActive ? 'white' : '#f35525',
                                                        fontWeight: 500,
                                                        fontSize: 16
                                                    })}
                                                >
                                                    <span style={{ fontWeight: 400 }}>
                                                        Manissha 2
                                                    </span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>


                                    <li>
                                        <a href="/contact">Contact Us</a>
                                    </li>
                                    <li className='navbar-contact' onClick={handleNavigate}>
                                        <Link style={{ display: 'flex', backgroundColor: 'black' }} href="#">
                                            <i style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <FaCalendar />
                                            </i>
                                            Contact Now
                                        </Link>
                                    </li>
                                </ul>
                                <a className="menu-trigger" onClick={toggleMenu}>
                                    <span>Menu</span>
                                </a>
                                {/* ***** Menu End ***** */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
