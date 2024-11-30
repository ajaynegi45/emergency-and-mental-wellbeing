import React from 'react'
import "./whyMS.css"
const WhyMS = () => {
  return (
    <div className="services-container" id="services">
     
      {/* <div className="bg-element">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z0imkbC__zKlYkwk" alt="Background Element" width="1218" height="968" />
      </div> */}
      <div className="services-content">
        <h2>Why Mind Shield ?</h2>
        <p>We’re here to empower you with tools that prioritize your safety and mental wellbeing. Whether it's an emergency or a need for motivation, we’ve got you covered</p>
        <div className="service-cards">
          <div className="service-card">
            <img src="sos.jpg" alt="SOS Alert" width="250" height="250" />
            <h3>SOS Alert</h3>
            <p>An emergency feature to instantly notify your registered contacts via email or phone in critical situations.</p>
          </div>
          <div className="service-card">
            <img src="journalnew.png" alt="Journalling" width="300" height="250" className='journalimg'/>
            <h3>Journalling</h3>
            <p>A secure space to document your daily thoughts and feelings for self-reflection.</p>
          </div>
          
        </div><br></br>
        <button className="register-button">Learn more</button>
      </div>
    </div>
  )
}

export default WhyMS
