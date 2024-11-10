// src/app/Component/Tips.js

import { FaRegLightbulb, FaPassport, FaLanguage } from 'react-icons/fa';

export default function Tips() {
  return (
    <section id="tips" style={tipsStyle}>
      <h2 style={sectionTitleStyle}>Travel Tips</h2>
      <ul style={tipsListStyle}>
        <li style={tipItemStyle}>
          <FaRegLightbulb style={iconStyle} />
          <span>Always carry travel insurance.</span>
        </li>
        <li style={tipItemStyle}>
          <FaPassport style={iconStyle} />
          <span>Keep copies of important documents.</span>
        </li>
        <li style={tipItemStyle}>
          <FaLanguage style={iconStyle} />
          <span>Learn basic phrases of the local language.</span>
        </li>
      </ul>
    </section>
  );
}

// Main container styling
const tipsStyle = {
  padding: '3rem 2rem',
  backgroundColor: '#f7fbff',
  textAlign: 'center',
  borderRadius: '12px',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  maxWidth: '700px',
  margin: '2rem auto',
  transition: 'transform 0.3s ease-in-out',
};

// Title styling
const sectionTitleStyle = {
  fontSize: '2.8rem',
  fontWeight: '600',
  color: '#333',
  marginBottom: '2rem',
  fontFamily: 'Arial, sans-serif',
};

// List styling
const tipsListStyle = {
  listStyleType: 'none',
  padding: 0,
  margin: 0,
};

// List item styling with subtle animation
const tipItemStyle = {
  fontSize: '1.2rem',
  color: '#333',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  margin: '1.2rem 0',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  padding: '1rem',
  borderRadius: '8px',
  backgroundColor: 'white',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
};

const iconStyle = {
  color: '#ff6f61',
  fontSize: '1.8rem',
};

// Enhance hover effect
tipItemStyle[':hover'] = {
  transform: 'translateX(8px)',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
};

// Media query for responsiveness
const mediaQueries = `
  @media (max-width: 768px) {
    ${sectionTitleStyle.fontSize = '2.2rem'};
    ${tipItemStyle.fontSize = '1rem'};
    ${iconStyle.fontSize = '1.5rem'};
  }
`;

export { mediaQueries };
