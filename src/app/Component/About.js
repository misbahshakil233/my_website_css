// pages/about.js
import Image from "next/image";
export default function About() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
      <section style={{ textAlign: 'center', background: 'linear-gradient(to right, #ffafbd, #ffc3a0)', padding: '50px 20px', color: 'white', borderRadius: '10px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>About Us</h1>
        <p style={{ fontSize: '1.2rem' }}>
          Learn more about who we are and what we do.
        </p>
      </section>
      <section style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', margin: '40px 0' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h2 style={{ color: '#ff6f61', marginBottom: '10px' }}>Who We Are</h2>
          <p style={{ color: '#333', lineHeight: '1.6' }}>
            We are a team of passionate individuals dedicated to delivering the
            best services in our industry. Our mission is to create value and
            make a difference in our community.
          </p>
          <h2 style={{ color: '#ff6f61', marginBottom: '10px' }}>Our Vision</h2>
          <p style={{ color: '#333', lineHeight: '1.6' }}>
            To be the leaders in innovation and excellence, inspiring others
            through our work and values.
          </p>
        </div>
        <div style={{ flex: 1, display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
         
          <Image
          width={700}
          height={100}
          src="/image.png"
            alt="Our Vision"
            style={{ maxWidth: '100%', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
          />
        </div>
      </section>
      <section style={{ backgroundColor: '#f9f9f9', padding: '40px 20px', borderRadius: '10px', textAlign: 'center' }}>
        <h2>What People Say About Us</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', maxWidth: '300px' }}>
            <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>
              This team is amazing! Highly recommended.
            </p>
            <span style={{ color: '#777', fontSize: '0.9rem' }}>- John Doe</span>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', maxWidth: '300px' }}>
            <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>
              Their services exceeded our expectations!
            </p>
            <span style={{ color: '#777', fontSize: '0.9rem' }}>- Jane Smith</span>
          </div>
        </div>
      </section>
    </div>
  );
}
