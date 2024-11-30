import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-columns">
        {/* First column: MIND SHIELD */}
        <div className="footer-column footer-column-1">
          <div className="footer-logo">
            <img src="https://dashboard.codeparrot.ai/api/assets/Z0ifgYNVQVcR8-Nd" alt="Logo" width="41" height="41" />
            <h2 className="footer-logo-text">MIND SHIELD</h2>
          </div>
          <p className="footer-description">
            Mental Shield offers instant emergency alerts, secure journaling, and daily positivity to support your mental well-being.
          </p>
          <p className="footer-rights">© Mind Shield PVT LTD 2024. All rights reserved</p>
        </div>

        {/* Second column: COMPANY */}
        <div className="footer-column">
          <h3 className="footer-title">COMPANY</h3>
          <ul className="footer-list">
            <li>About</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>App</li>
          </ul>
        </div>

        {/* Third column: REGION */}
        <div className="footer-column">
          <h3 className="footer-title">REGION</h3>
          <ul className="footer-list">
            <li>India</li>
            <li>Singapore</li>
            <li>Hong Kong</li>
            <li>Canada</li>
          </ul>
        </div>

        {/* Fourth column: HELP */}
        <div className="footer-column">
          <h3 className="footer-title">HELP</h3>
          <ul className="footer-list">
            <li>Help center</li>
            <li>Contact support</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
