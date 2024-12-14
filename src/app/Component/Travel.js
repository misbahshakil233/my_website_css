// pages/travel.js
export default function Travel() {
    return (
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
        {/* Header Section */}
        <header style={{ background: 'linear-gradient(to right, #1e3c72, #2a5298)', padding: '30px 20px', color: 'white', textAlign: 'center', borderRadius: '10px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Explore the World with Us</h1>
          <p style={{ fontSize: '1.2rem' }}>Your gateway to unforgettable adventures</p>
        </header>
  
        {/* Top Destinations Section */}
        <section style={{ margin: '40px 0', textAlign: 'center' }}>
          <h2 style={{ color: '#2a5298', fontSize: '2rem', marginBottom: '20px' }}>Top Destinations</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {/* Destination Cards */}
            <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', width: '300px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <img src="/paris.jpg" alt="Paris" style={{ width: '100%', borderRadius: '10px', marginBottom: '10px' }} />
              <h3 style={{ color: '#1e3c72', marginBottom: '10px' }}>Paris</h3>
              <p>Experience the romance and elegance of the City of Lights.</p>
            </div>
            <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', width: '300px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <img src="/maldives.jpg" alt="Maldives" style={{ width: '100%', borderRadius: '10px', marginBottom: '10px' }} />
              <h3 style={{ color: '#1e3c72', marginBottom: '10px' }}>Maldives</h3>
              <p>Relax in paradise with crystal-clear waters and white sandy beaches.</p>
            </div>
            <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', width: '300px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <img src="/tokyo.jpg" alt="Tokyo" style={{ width: '100%', borderRadius: '10px', marginBottom: '10px' }} />
              <h3 style={{ color: '#1e3c72', marginBottom: '10px' }}>Tokyo</h3>
              <p>Discover the vibrant culture and cutting-edge technology of Japan.</p>
            </div>
          </div>
        </section>
  
        {/* Why Travel With Us Section */}
        <section style={{ backgroundColor: '#2a5298', color: 'white', padding: '40px 20px', borderRadius: '10px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Why Travel With Us?</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {/* Features Cards */}
            <div style={{ backgroundColor: 'white', color: '#2a5298', padding: '20px', borderRadius: '10px', width: '300px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ marginBottom: '10px' }}>Personalized Packages</h3>
              <p>We tailor trips to your preferences, ensuring a unique experience.</p>
            </div>
            <div style={{ backgroundColor: 'white', color: '#2a5298', padding: '20px', borderRadius: '10px', width: '300px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ marginBottom: '10px' }}>24/7 Support</h3>
              <p>Our team is always available to assist you throughout your journey.</p>
            </div>
            <div style={{ backgroundColor: 'white', color: '#2a5298', padding: '20px', borderRadius: '10px', width: '300px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ marginBottom: '10px' }}>Affordable Prices</h3>
              <p>Enjoy premium travel experiences at competitive rates.</p>
            </div>
          </div>
        </section>
  
        {/* Footer Section */}
        <footer style={{ marginTop: '40px', textAlign: 'center', padding: '20px', backgroundColor: '#1e3c72', color: 'white', borderRadius: '10px' }}>
          <p>&copy; 2024 Travel Explore. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  