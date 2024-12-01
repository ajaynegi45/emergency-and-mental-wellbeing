import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { IoPersonCircleSharp } from "react-icons/io5";
import './Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userCookie = Cookies.get('user');
    if (userCookie) {
      setUser(JSON.parse(userCookie));
    } else {
      navigate('/login'); // Redirect to login if no user is logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    Cookies.remove('user'); // Remove the user cookie
    navigate('/login'); // Redirect to login page
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="mindshield-container" id="home">
      {/* Header */}
      <header className="mindshield-header">
        <div className="logo">
          <img
            src="https://dashboard.codeparrot.ai/api/assets/Z0ifgYNVQVcR8-Nd"
            alt="Logo"
            width="41"
            height="41"
          />
          <span className="logo-text">MIND SHIELD</span>
        </div>
        <nav className="mindshield-nav">
          <a href="#home">Home</a>
          <a href="#emergencycontacts">Emergency Contacts</a>
          <Link to="/journaling">Journalling</Link> {/* Add link to journaling page */}
          <IoPersonCircleSharp className="icon" />
        </nav>
      </header>

      {/* Main Content */}
      <main className="mindshield-main">
        <div className="mindshield-content">
          <h1>
            Hi {user.username.toUpperCase()}, <br />
            YOUR TODAY'S POSIVIBE<br/><br/><h1 className='posi' style={{color:"rgba(223, 58, 90, 1)",paddingLeft:"100px"}}>“You deserve all the good things. Believe in yourself !”</h1>
          </h1>
          <br />
          <Link to="/sos-alert">
            <button className="sos-button">SOS ALERT</button>
          </Link>
          <p className="p">Tap in case of Emergency</p>
        </div>
        <div className="mindshield-image">
          <img
            src="src/assets/img1.jpg"
            alt="Illustration"
            width="693"
            height="598"
          />
        </div>
      </main>

      {/* Footer Section */}
    </div>
  );
};

export default Dashboard;
