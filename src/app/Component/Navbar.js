// src/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={navbarStyle}>
      <h1 style={logoStyle}>Travel Guide</h1>
      <ul style={navLinksStyle}>
        <li><Link href="#home" style={linkStyle}>Home</Link></li>
        <li><Link href="#destinations" style={linkStyle}>Destinations</Link></li>
        <li><Link href="#featured" style={linkStyle}>Featured</Link></li>
        <li><Link href="#tips" style={linkStyle}>Travel Tips</Link></li>
        <li><Link href="#contact" style={linkStyle}>Contact</Link></li>
      </ul>
    </nav>
  );
}

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  backgroundColor: '#2C3E50',
  color: 'white',
};

const logoStyle = {
  fontSize: '1.8rem',
  fontWeight: 'bold',
};

const navLinksStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '1.5rem',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};
