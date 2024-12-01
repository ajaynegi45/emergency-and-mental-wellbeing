import React from 'react';
import './ServicesComponent.css';

const ServicesComponent = () => {
  return (
    <div className="services-container" id="services">
      {/* <div className="bg-element">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z0imkbC__zKlYkwk" alt="Background Element" width="1218" height="968" />
      </div> */}
      <div className="services-content">
        <h2>Our services</h2>
        <p>We provide to you the best things for you</p>
        <div className="service-cards">
          <div className="service-card1">
            <img src="sos.jpg" alt="SOS Alert" width="250" height="250" />
            <h3>SOS Alert</h3>
            <p>An emergency feature to instantly notify your registered contacts via email or phone in critical situations.</p>
          </div>
          <div className="service-card2">
            <img src="journalnew.png" alt="Journalling" width="300" height="250" className='journalimg'/>
            <h3>Journalling</h3>
            <p>A secure space to document your daily thoughts and feelings for self-reflection.</p>
          </div>
          <div className="service-card3">
            <img src="mental.jpg" alt="Positive Affirmations" width="230" height="250" />
            <h3>Positive Affirmations</h3>
            <p>A collection of motivational quotes to inspire positivity and boost your mental well-being every day.</p>
          </div>
        </div><br></br>
        <button className="register-button">Learn more</button>
      </div>
    </div>
  );
};

export default ServicesComponent;
