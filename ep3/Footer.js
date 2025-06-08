import React from 'react';
import './SwiggyFooter.css'; // import the CSS
import { FaLinkedin, FaInstagram, FaFacebookF, FaPinterest, FaTwitter } from 'react-icons/fa';

const SwiggyFooter = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column logo-column">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk50Ut-wJKwbca3BTPssDUl_fqnsEE_D2tcw&s"
                        alt="Swiggy Logo" className="logo" />
                    <p>© 2025 Swiggy Limited</p>
                </div>

                <div className="footer-column">
                    <h4>Company</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Swiggy Corporate</li>
                        <li>Careers</li>
                        <li>Team</li>
                        <li>Swiggy One</li>
                        <li>Swiggy Instamart</li>
                        <li>Swiggy Dineout</li>
                        <li>Swiggy Genie</li>
                        <li>Minis</li>
                        <li>Pyng</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Contact us</h4>
                    <ul>
                        <li>Help & Support</li>
                        <li>Partner with us</li>
                        <li>Ride with us</li>
                    </ul>
                    <h4>Legal</h4>
                    <ul>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Available in:</h4>
                    <ul>
                        <li>Bangalore</li>
                        <li>Gurgaon</li>
                        <li>Hyderabad</li>
                        <li>Delhi</li>
                        <li>Mumbai</li>
                        <li>Pune</li>
                    </ul>
                    <select>
                        <option>679 cities</option>
                    </select>
                </div>

                <div className="footer-column">
                    <h4>Life at Swiggy</h4>
                    <ul>
                        <li>Explore with Swiggy</li>
                        <li>Swiggy News</li>
                        <li>Snackables</li>
                    </ul>
                    <h4>Social Links</h4>
                    <div className="social-icons">
                        <FaLinkedin />
                        <FaInstagram />
                        <FaFacebookF />
                        <FaPinterest />
                        <FaTwitter />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SwiggyFooter;
