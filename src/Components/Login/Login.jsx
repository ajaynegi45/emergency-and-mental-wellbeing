import React, { useState } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom'; 
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Track focus for inputs
  const [focused, setFocused] = useState({
    email: false,
    password: false,
  });

  // Helper function to handle focus change
  const handleFocus = (field) => {
    setFocused((prevState) => ({ ...prevState, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocused((prevState) => ({ ...prevState, [field]: false }));
  };

  const formContainerStyle = {
    backgroundColor:'white',
    // display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '100px',
    maxWidth: '1300px',
    margin: 'auto',
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    paddingLeft: '500px',
    whiteSpace: 'nowrap',
  };

  const inputGroupStyle = {
    paddingRight: '100px',
    paddingLeft:'150px',
    marginBottom: '15px',
    width: '100%',
  };

  const labelStyle = {
    fontSize: '20px',
    marginBottom: '5px',
  };

  const inputStyle = (isFocused) => ({
    width: '100%',
    padding: '10px',
    fontSize: '15px',
    marginTop: '5px',
    borderRadius: '5px',
    border: `1px solid ${isFocused ? 'rgba(69, 143, 246, 1)' : '#ccc'}`, // Change border color when focused
    fontFamily: '"Mulish", sans-serif',
    boxShadow: isFocused ? '0 0 5px rgba(69, 143, 246, 0.7)' : 'none', // Glow effect when focused
    transition: 'box-shadow 0.3s ease-in-out',
  });

  const buttonStyle = {
    marginLeft:'160px',
    paddingRight:'10px',
    width: '80%',
    padding: '10px',
    fontSize: '20px',
    backgroundColor: 'rgba(69, 143, 246, 1)',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  };

  const alreadyAccountStyle = {
    whiteSpace: 'nowrap',
    marginLeft:'500px',
    paddingRight: '700px',
    textAlign: 'center',
    marginTop: '15px',
    fontSize: '19px',
    color: '#333',
  };

  return (
    <div style={formContainerStyle}>
      <div style={titleStyle}>Login to your Account</div>

      {/* Email */}
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => handleFocus('email')}
          onBlur={() => handleBlur('email')}
          style={inputStyle(focused.email)} // Pass the focus state
        />
      </div>

      {/* Password */}
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => handleFocus('password')}
          onBlur={() => handleBlur('password')}
          style={inputStyle(focused.password)} // Pass the focus state
        />
      </div>

      {/* Log In Button */}
      <button style={buttonStyle}>Login</button>

      {/* Don't have an account? */}
      <div style={alreadyAccountStyle}>
        Don't have an account? <a href="/create-account" style={{ color: 'rgba(6, 107, 249, 1)', textDecoration: 'none' }}>Create an Account</a>
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <div style={{ display: 'flex', minHeight: '30vh' }}>
      {/* Left Section: Form */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <LoginForm />
      </div>

      {/* Right Section: Image */}
      <div style={{ flex: 1, backgroundImage: 'url(/path/to/your/image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
    </div>
  );
};

export default Login;
