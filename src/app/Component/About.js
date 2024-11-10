// src/components/About.js

export default function About() {
  return (
    <section id="about" style={aboutStyle}>
      <h2 style={headingStyle}>About Us</h2>
      <p style={paragraphStyle}>Welcome to our website. We are glad to have you here!</p>
    </section>
  );
}

// Inline styles as JavaScript objects
const aboutStyle = {
  padding: '2rem',
  backgroundColor: '#f4f4f9',
  textAlign: 'center',
};

const headingStyle = {
  fontSize: '2rem',
  margin: 0,
};

const paragraphStyle = {
  fontSize: '1rem',
  color: '#333',
  margin: '0.5rem 0 0',
};
