// src/components/Navbar.js
"use client"; // Add this at the top for client components

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Travel Guide</h1>
      <button onClick={toggleMenu} style={styles.hamburger}>
        {menuOpen ? "✖" : "☰"}
      </button>
      <ul style={{ 
        ...styles.navLinks, 
        ...(menuOpen ? styles.navOpen : styles.navCollapsed) 
      }}>
        <li><Link href="#home" style={styles.link}>Home</Link></li>
        <li><Link href="#destinations" style={styles.link}>Destinations</Link></li>
        <li><Link href="#featured" style={styles.link}>Featured</Link></li>
        <li><Link href="#tips" style={styles.link}>Travel Tips</Link></li>
        <li><Link href="#contact" style={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#2C3E50",
    color: "white",
    position: "relative",
    zIndex: 10,
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
  },
  hamburger: {
    display: "none",
    fontSize: "1.5rem",
    color: "white",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    zIndex: 20,
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "1.5rem",
    transition: "all 0.3s ease",
  },
  navCollapsed: {
    display: "none",
  },
  navOpen: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    position: "absolute",
    top: "60px",
    left: "0",
    right: "0",
    backgroundColor: "#2C3E50",
    padding: "1rem",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  // Media query styles
  "@media (max-width: 768px)": {
    navLinks: {
      display: "none",
    },
    hamburger: {
      display: "block",
    },
  },
};
