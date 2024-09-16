import React, { useState } from 'react';
import Navheading from './Navheading';
import { FaCalendar } from 'react-icons/fa';
import logo from '../Assets/logo.jpg';
import { useNavigate } from 'react-router';
import './NavBar.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, NavLink } from 'react-router-dom';

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
            <Navheading />
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* ***** Logo Start ***** */}
                                <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} href="/" className="logo">
                                    <div style={{ width: 100, paddingBottom: 10 }}>
                                        <img src={logo} alt="Logo" />
                                    </div>
                                </a>
                                {/* ***** Logo End ***** */}
                                {/* ***** Menu Start ***** */}
                                <ul onClick={closeMenu} className={`nav ${isMenuOpen ? 'open' : ''}`}>
                                    <li>
                                        <a href="/" className="active">Home</a>
                                    </li>
                                    <li style={{ position: 'relative' }} className="dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Pages
                                        </a>
                                        ;

                                        <ul style={{ position: 'absolute' }} className="dropdown-menu">
                                            <li>
                                                <NavLink
                                                    className="drop-navlink dropdown-item"
                                                    to="/about"
                                                    style={({ isActive }) => ({
                                                        backgroundColor: isActive ? 'black' : 'transparent',
                                                        color: isActive ? 'white' : '#f35525',
                                                        fontWeight: 500,
                                                        fontSize: 16,
                                                        borderRadius:30
                                                        
                                                    })}
                                                >
                                                    Manisha 1
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className="drop-navlink dropdown-item"
                                                    to="/manisha2"
                                                    style={({ isActive }) => ({
                                                        backgroundColor: isActive ? 'black' : 'transparent',
                                                        color: isActive ? 'white' : '#f35525',
                                                        fontWeight: 500,
                                                        fontSize: 16,
                                                        borderRadius:30

                                                    })}
                                                >
                                                    Manisha 2
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className="drop-navlink dropdown-item"
                                                    to="/aboutowner"
                                                    style={({ isActive }) => ({
                                                        backgroundColor: isActive ? 'black' : 'transparent',
                                                        color: isActive ? 'white' : '#f35525',
                                                        fontWeight: 500,
                                                        fontSize: 16,
                                                        borderRadius:30
                                                        
                                                    })}
                                                >
                                                    About Owner
                                                </NavLink>
                                            </li>
                                        </ul>

                                    </li>

                                    <li style={{ position: 'relative' }} className="dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Galleries
                                        </a>
                                        <ul onClick={closeMenu} style={{ position: 'absolute' }} className="dropdown-menu">
                                            <li>
                                                <NavLink
                                                    className="drop-navlink dropdown-item"
                                                    to="/gallery"
                                                    style={({ isActive }) => ({
                                                        backgroundColor: isActive ? 'black' : 'transparent',
                                                        color: isActive ? 'white' : '#f35525',
                                                        fontWeight: 500,
                                                        fontSize: 16,
                                                        borderRadius: 30
                                                    })}
                                                >
                                                    Manisha 1
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className="drop-navlink dropdown-item"
                                                    to="/gallery2"
                                                    style={({ isActive }) => ({
                                                        backgroundColor: isActive ? 'black' : 'transparent',
                                                        color: isActive ? 'white' : '#f35525',
                                                        fontWeight: 500,
                                                        fontSize: 16
                                                    })}
                                                >
                                                    Manisha 2
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>


                                    <li>
                                        <a href="/contact">Contact Us</a>
                                    </li>
                                    <li className='navbar-contact' onClick={handleNavigate}>
                                        <Link onClick={closeMenu} style={{ display: 'flex', backgroundColor: 'black' }} href="#">
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
