// src/app/Component/Footer.js

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        {/* About Section */}
        <div style={footerSectionStyle}>
          <h4 style={footerHeadingStyle}>About Us</h4>
          <p style={footerTextStyle}>
            We are dedicated to providing the best travel experiences for adventurers and explorers around the world.
          </p>
        </div>

        {/* Quick Links */}
        <div style={footerSectionStyle}>
          <h4 style={footerHeadingStyle}>Quick Links</h4>
          <ul style={linkListStyle}>
            <li><a href="#home" style={linkStyle}>Home</a></li>
            <li><a href="#services" style={linkStyle}>Services</a></li>
            <li><a href="#about" style={linkStyle}>About Us</a></li>
            <li><a href="#contact" style={linkStyle}>Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={footerSectionStyle}>
          <h4 style={footerHeadingStyle}>Contact Us</h4>
          <p style={footerTextStyle}>123 Adventure Lane, Wanderlust City</p>
          <p style={footerTextStyle}>Phone: (123) 456-7890</p>
          <p style={footerTextStyle}>Email: info@travel.com</p>
        </div>

        {/* Social Media Icons */}
        <div style={footerSectionStyle}>
          <h4 style={footerHeadingStyle}>Follow Us</h4>
          <div style={iconContainerStyle}>
            <a href="https://facebook.com" style={iconLinkStyle}><FaFacebookF /></a>
            <a href="https://twitter.com" style={iconLinkStyle}><FaTwitter /></a>
            <a href="https://instagram.com" style={iconLinkStyle}><FaInstagram /></a>
            <a href="https://linkedin.com" style={iconLinkStyle}><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <p style={copyrightStyle}>&copy; 2024 Travel. All rights reserved.</p>
    </footer>
  );
}

// Styles
const footerStyle = {
  backgroundColor: '#333',
  color: '#f7f7f7',
  padding: '2rem 1rem',
  textAlign: 'center',
};

const footerContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  maxWidth: '1000px',
  margin: '0 auto',
};

const footerSectionStyle = {
  flex: '1 1 200px',
  marginBottom: '1.5rem',
};

const footerHeadingStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
};

const footerTextStyle = {
  fontSize: '0.9rem',
  color: '#ccc',
};

const linkListStyle = {
  listStyle: 'none',
  padding: 0,
};

const linkStyle = {
  textDecoration: 'none',
  color: '#f7f7f7',
  fontSize: '0.9rem',
  display: 'block',
  marginBottom: '0.5rem',
  transition: 'color 0.3s',
};

const iconContainerStyle = {
  display: 'flex',
  gap: '0.75rem',
  marginTop: '0.5rem',
};

const iconLinkStyle = {
  color: '#f7f7f7',
  fontSize: '1.2rem',
  transition: 'color 0.3s',
};

const copyrightStyle = {
  fontSize: '0.8rem',
  color: '#aaa',
  marginTop: '1rem',
};

// Hover styles
linkStyle[':hover'] = {
  color: '#ff6f61',
};

iconLinkStyle[':hover'] = {
  color: '#ff6f61',
};
