import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { CiCircleChevUp } from "react-icons/ci";
import './Footer.css';
import logo from '../../logo.svg'; // Assuming the logo is located here

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Row 1 */}
      <div className="footer-row">
        {/* Column 1: Company Info with Logo and Social Icons */}
        <div className="footer-col company-info">
          <img src={logo} alt="company logo" className="footer-logo" />
          <p>Trendmorph is a leading company specializing in fashion and trends.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
              <FaPinterestP />
            </a>
          </div>
        </div>

        {/* Column 2: Address, Phone, Email */}
        <div className="footer-col contact-info">
          <h4>Contact Us</h4>
          <p>123 Fashion Ave, New York, NY 10001</p>
          <p>Phone: +1 800 123 456</p>
          <p>Email: info@trendmorph.com</p>
        </div>

        {/* Column 3: Useful Links */}
        <div className="footer-col useful-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#home">Help Center</a></li>
            <li><a href="#shop">Cancellation & Refund</a></li>
            <li><a href="#about">Terms & Conditions</a></li>
            <li><a href="#contact">Privacy & Policies</a></li>
            <li><a href="#contact">Shipping & Delivery</a></li>
          </ul>
        </div>

        {/* Column 4: Fourth Coming Links */}
        <div className="footer-col fourth-coming">
          <h4>Fourth Coming</h4>
          <ul>
            <li><a href="#events">Affiliate Program</a></li>
            <li><a href="#new-arrivals">Referral Program</a></li>
            <li><a href="#sales">Contacts</a></li>
          </ul>
        </div>
      </div>

      {/* Row 2 */}
      <div className="footer-bottom-row">
        <p>Copyright ©2024 Trendmorph.com All rights reserved</p>
        <p>Back to Top <CiCircleChevUp className="back-to-top-arrow" onClick={() => window.scrollTo(0, 0)}/></p>
      </div>
    </footer>
  );
};

export default Footer;
