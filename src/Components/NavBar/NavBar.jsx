import React from 'react';
import {Link, useNavigate} from "react-router-dom";
const NavBar = () => {
  const navigate=useNavigate();
  // Inline styles for the navbar
  const Profile=()=>{
    navigate('/profile');
  }
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '10px',
    backgroundColor: 'white',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',  // Keep vertical centering
  };

  const logoImgStyle = {
    width: '40px',  // Adjust based on your logo size
    height: 'auto',
    paddingLeft: '30px',
    paddingRight: '20px',
    marginRight: '10px',
  };

  const siteNameStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    margin: 0,  // Reset any margin
    padding: 0, // Reset any padding
    lineHeight: '0', // Adjust line height to remove extra space
    verticalAlign: 'middle', // Ensure text aligns vertically with the logo
  };

  const rightImageStyle = {
    width: '250px',  // Adjust size of right image
    height: 'auto',
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/dashboard">
        <div style={logoStyle}>

          <img src="m.png" alt="Logo" style={logoImgStyle} />
          <span style={siteNameStyle}>MIND SHIELD</span>

        </div>
      </Link>
      <div>
        <img src="reg_pic.png" style={rightImageStyle} onClick={Profile}/>
      </div>
    </nav>
  );
};

export default NavBar;
