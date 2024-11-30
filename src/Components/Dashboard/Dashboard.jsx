import React from 'react'
import { Link } from 'react-router-dom';
import { IoPersonCircleSharp } from "react-icons/io5";
import './Dashboard.css'
// import WhyMS from './whyMS/whyMS';

const Dashboard = () => {
  return (
    <div className="mindshield-container" id="home">
      
      <header className="mindshield-header">
        <div className="logo">
          <img src="https://dashboard.codeparrot.ai/api/assets/Z0ifgYNVQVcR8-Nd" alt="Logo" width="41" height="41" />
          <span className="logo-text">MIND SHIELD</span>
        </div>
        <nav className="mindshield-nav">
          <a href="#home">Home</a>
          
          <a href="#emergencycontacts">Emergency Contacts</a>
          <a href="#jounaling">Journaling <IoPersonCircleSharp className='icon'/></a>
          
         {/* Use Link to navigate to /login */}
        </nav> 
      </header>
      <main className="mindshield-main">
        <div className="mindshield-content">
          <h1>Hi JOHN DOE, <br />Your TODAY'S POSIVIBE</h1><br />
          
          <Link to="/sos-alert"><button className="sos-button">SOS ALERT</button></Link>
          
            <p className='p'
          >Tap in case of Emergency</p>
          
           {/* Use Link to navigate to /create-account */}

         
        </div>
        <div className="mindshield-image">
          <img src="src/assets/img1.jpg" alt="Illustration" width="693" height="598" />
        </div>
      </main>
      {/* <WhyMS /> */}
    </div>
   
  )
}

export default Dashboard
