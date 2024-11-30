import React from 'react'
import './Testimonial.css'

const Testimonial = () => {
  return (
    <div className="testimonial-container" id="testimonials">
      <div className="testimonial-box">
        {/* Title centered at the top */}
        <div className="testimonial-title">
          <h2>What our customers say</h2>
        </div>
        
        <div className="testimonial-left">
          <img src="customer.jpg" alt="Customer" className="testimonial-img" />
          <h3 className="customer-name">John Doe</h3>
        </div>
        
        <div className="testimonial-right">
          <p className="customer-review">
            "Mind shield has been a lifesaver! The SOS feature gave me peace of mind knowing I can reach my emergency contacts instantly. I also love the journaling feature—it’s a great way to reflect on my thoughts, and the daily affirmations keep me motivated. Highly recommend it to anyone looking to prioritize their safety and mental health!"
          </p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
