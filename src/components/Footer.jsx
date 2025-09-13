import React from 'react'

function Footer() {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer-section">
                        <h3 style={{ color: 'rgb(99, 98, 98)' }}>About Us</h3>
                        <p>We are dedicated to providing the best services and products to our customers. Our mission is to
                            innovate and excel in everything we do.</p>
                    </div>
                    <div className="footer-section">
                        <h3 style={{ color: 'rgb(99, 98, 98)' }}>Quick Links</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 style={{ color: 'rgb(99, 98, 98)' }}>Contact Info</h3>
                        <p>Email: info@company.com</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Address: 123 Business Street, City, Country</p>
                    </div>
                    <div className="footer-section">
                        <h3 style={{ color: 'rgb(99, 98, 98)' }}>Follow Us</h3>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook" /></a>
                            <a href="#"><i className="fab fa-twitter" /></a>
                            <a href="#"><i className="fab fa-linkedin" /></a>
                            <a href="#"><i className="fab fa-instagram" /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p style={{ color: 'rgb(99, 98, 98)' }}>© 2024 Company Name. All rights reserved.</p>
                </div>
            </footer>

        </>
    )
}

export default Footer
