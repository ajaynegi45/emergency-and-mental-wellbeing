import React from 'react';
import { Link } from 'react-router-dom';  // Import Link
import './MindShieldComponent.css';

const MindShieldComponent = () => {
  return (
    <div className="mindshield-container" id="home">
      <header className="mindshield-header">
        <div className="logo">
          <img src="https://dashboard.codeparrot.ai/api/assets/Z0ifgYNVQVcR8-Nd" alt="Logo" width="41" height="41" />
          <span className="logo-text">MIND SHIELD</span>
        </div>
        <nav className="mindshield-nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#apps">App</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#about">About Us</a>
          <Link to="/login"><button className="register-button">Login</button></Link> {/* Use Link to navigate to /login */}
        </nav>
      </header>
      <main className="mindshield-main">
        <div className="mindshield-content">
          <h1>Help when u need it, <br />Hope when u want it</h1><br />
          <p>
            A platform dedicated to your safety and mental well-being. Instantly notify loved ones in emergencies with our SOS feature, reflect through secure journaling, and stay motivated with uplifting affirmations.
          </p><br />
          <Link to="/create-account"><button className="register-button">Register</button></Link> {/* Use Link to navigate to /create-account */}
        </div>
        <div className="mindshield-image">
          <img src="src/assets/img1.jpg" alt="Illustration" width="693" height="598" />
        </div>
      </main>
    </div>
  );
};

export default MindShieldComponent;
