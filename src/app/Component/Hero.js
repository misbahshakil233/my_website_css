"use client"; // This makes the component a client-side component for interactive functionality

export default function Hero() {
  return (
    <section id="home" style={heroStyle}>
      {/* Inline <style> tag to include keyframes */}
      <style>
        {`
          @keyframes fadeSlideUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          /* Responsive Media Query */
          @media (max-width: 768px) {
            #home h1 {
              font-size: 2.5rem;
            }
            #home p {
              font-size: 1.2rem;
            }
          }
        `}
      </style>
      
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Discover the World with Us</h1>
        <p style={subtitleStyle}>Start your next adventure with us. Explore exotic destinations and hidden gems around the globe.</p>
      </div>
      <div style={curveStyle}></div>
    </section>
  );
}

// Hero Section Styles
const heroStyle = {
  position: 'relative',
  padding: '5rem 2rem',
  backgroundImage: 'url("/hero1.jpeg")', // Replace with the correct image path
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  textAlign: 'center',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
};

// Overlay to make the text stand out
const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  zIndex: 1,
};

// Curved Bottom Effect
const curveStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '100px',
  backgroundColor: 'white',
  clipPath: 'ellipse(100% 30% at 50% 100%)', // Creates a curved effect at the bottom
  zIndex: 2,
};

// Content Section
const contentStyle = {
  position: 'relative',
  zIndex: 3,
  maxWidth: '800px',
  padding: '2rem',
  animation: 'fadeIn 2s ease-in-out', // Fade-in animation for the entire content section
};

// Title Style with Slide-Up Animation
const titleStyle = {
  fontSize: '3.5rem',
  fontWeight: 'bold',
  margin: 0,
  textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)',
  letterSpacing: '2px',
  animation: 'fadeSlideUp 1.5s ease-out', // Slide-up text animation
};

// Subtitle Style with Slide-Up Animation
const subtitleStyle = {
  fontSize: '1.6rem',
  marginTop: '1rem',
  textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)',
  animation: 'fadeSlideUp 2s ease-out',
};
