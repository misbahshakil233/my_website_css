// src/app/Component/Destinations.js

import Image from 'next/image';

export default function Destinations() {
  return (
    <section id="destinations" style={destinationsStyle}>
      <h2 style={sectionTitleStyle}>Popular Destinations</h2>
      <div style={galleryStyle}>
        <div style={cardStyle}>
          <Image src="/paris.jpeg" alt="Paris" style={imageStyle} width={300} height={200} />
          <div style={cardContentStyle}>
            <h3 style={cardTitleStyle}>Paris</h3>
            <p style={cardDescriptionStyle}>The city of lights and love.</p>
          </div>
        </div>
        <div style={cardStyle}>
          <Image src="/toko.jpeg" alt="Tokyo" style={imageStyle} width={300} height={200} />
          <div style={cardContentStyle}>
            <h3 style={cardTitleStyle}>Tokyo</h3>
            <p style={cardDescriptionStyle}>A vibrant metropolis full of life.</p>
          </div>
        </div>
        <div style={cardStyle}>
          <Image src="/newyork.jpeg" alt="New York" style={imageStyle} width={300} height={200} />
          <div style={cardContentStyle}>
            <h3 style={cardTitleStyle}>New York</h3>
            <p style={cardDescriptionStyle}>The city that never sleeps.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section styling
const destinationsStyle = {
  padding: '3rem 2rem',
  textAlign: 'center',
  backgroundColor: '#f5f5f5',
};

// Section title styling
const sectionTitleStyle = {
  fontSize: '2.5rem',
  marginBottom: '2rem',
  color: '#333',
};

// Gallery styling
const galleryStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1.5rem',
  justifyItems: 'center',
};

// Card styling
const cardStyle = {
  borderRadius: '8px',
  overflow: 'hidden',
  backgroundColor: 'white',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  width: '100%',
  maxWidth: '300px',
  cursor: 'pointer',
};

const cardContentStyle = {
  padding: '1rem',
};

// Card hover effect
cardStyle[':hover'] = {
  transform: 'scale(1.05)',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
};

// Image styling
const imageStyle = {
  objectFit: 'cover',
};

// Card title styling
const cardTitleStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#333',
  margin: '0.5rem 0',
};

// Card description styling
const cardDescriptionStyle = {
  color: '#666',
  fontSize: '1rem',
  margin: '0.5rem 0',
};
