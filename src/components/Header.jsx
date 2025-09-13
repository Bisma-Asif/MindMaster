import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpeg';

function Header() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="logo">
                    <img className="logo" src={logo} alt="company logo" />
                </Link>

                <ul className="nav-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/eventcalender">Event Calendar</Link></li>
                    <li><Link to="/eventDetails">Event Details</Link></li>
                    <li><Link to="/register">Registration</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/feedback">Feedback</Link></li>
                </ul>

                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}

export default Header;
