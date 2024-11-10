// src/components/Featured.js

import { FaPlane, FaHotel, FaGlobe } from 'react-icons/fa';

export default function Featured() {
    return (
        <section style={featuredSectionStyle}>
            <h2 style={sectionTitleStyle}>Featured Services</h2>
            <div style={featureGridStyle}>
                <div style={featureCardStyle}>
                    <FaPlane style={iconStyle} />
                    <h3 style={featureTitleStyle}>Flight Booking</h3>
                    <p style={featureDescriptionStyle}>Easily book flights to any destination worldwide with just a few clicks.</p>
                </div>
                <div style={featureCardStyle}>
                    <FaHotel style={iconStyle} />
                    <h3 style={featureTitleStyle}>Hotel Stays</h3>
                    <p style={featureDescriptionStyle}>Find the best hotels with exclusive deals and comfortable amenities.</p>
                </div>
                <div style={featureCardStyle}>
                    <FaGlobe style={iconStyle} />
                    <h3 style={featureTitleStyle}>Tour Packages</h3>
                    <p style={featureDescriptionStyle}>Explore curated travel packages tailored to your preferences and budget.</p>
                </div>
            </div>
        </section>
    );
}

// Styles for Featured Section
const featuredSectionStyle = {
    padding: '3rem 1.5rem',
    backgroundColor: '#f4f7fb',
    textAlign: 'center',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '900px',
    margin: '2rem auto',
};

const sectionTitleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '2rem',
};

const featureGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
};

const featureCardStyle = {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    textAlign: 'center',
};

featureCardStyle[':hover'] = {
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
};

const iconStyle = {
    color: '#ff6f61',
    fontSize: '2.5rem',
    marginBottom: '1rem',
};

const featureTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '0.5rem',
};

const featureDescriptionStyle = {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.5',
};
