import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import Cookies from 'js-cookie';
import { login } from '../../services/AuthService';

const Login = () => {
  const navigate = useNavigate();

  const [data,setData]=useState({
    email: '',
    password: '',
  })
  const handleInputChange = (field, value) => {
    setData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
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

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate a successful login (replace with your backend logic later)
    if (data.email !=='' && data.password !=='') {
      // Save user data in cookies
      login(data).then((resp)=>{
        const user = {username: data.email.split('@')[0] }; // Use part of email as username
        Cookies.set('user', JSON.stringify(user), { expires: 7, secure: true });
        navigate('/dashboard');
      })
      .catch((err) => {
        console.error("Error during login", err);
        alert("Invalid credentials");
  
    });
      

      // Redirect to Dashboard
      
    } else {
      alert('Invalid credentials');
    }
  };

  const formContainerStyle = {
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px',
    maxWidth: '1000px',
    margin: '50px auto',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    borderRadius: '8px',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const inputGroupStyle = {
    marginBottom: '15px',
    width: '100%',
  };

  const labelStyle = {
    fontSize: '16px',
    marginBottom: '5px',
    display: 'block',
  };

  const inputStyle = (isFocused) => ({
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    borderRadius: '5px',
    border: `1px solid ${isFocused ? 'rgba(69, 143, 246, 1)' : '#ccc'}`, // Change border color when focused
    fontFamily: '"Mulish", sans-serif',
    boxShadow: isFocused ? '0 0 5px rgba(69, 143, 246, 0.7)' : 'none', // Glow effect when focused
    transition: 'box-shadow 0.3s ease-in-out',
  });

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: 'rgba(69, 143, 246, 1)',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const linkStyle = {
    display: 'block',
    marginTop: '10px',
    textAlign: 'center',
    fontSize: '14px',
    color: 'rgba(6, 107, 249, 1)',
    textDecoration: 'none',
  };
  const alreadyAccountStyle = {
    whiteSpace: 'nowrap',
    marginLeft:'320px',
    paddingRight: '700px',
    textAlign: 'center',
    marginTop: '15px',
    fontSize: '19px',
    color: '#333',
  };

  return (
    <div style={formContainerStyle}>
      <div style={titleStyle}>Login to your Account</div>

      <form onSubmit={handleLogin}>
        {/* Email Input */}
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleInputChange("email",e.target.value)}
            onFocus={() => handleFocus('email')}
            onBlur={() => handleBlur('email')}
            style={inputStyle(focused.email)}
            required
          />
        </div>

        {/* Password Input */}
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Password</label>
          <input
            type="password"
            value={data.password}
            onChange={(e) => handleInputChange("password",e.target.value)}
            onFocus={() => handleFocus('password')}
            onBlur={() => handleBlur('password')}
            style={inputStyle(focused.password)}
            required
          />
        </div>

        {/* Login Button */}
        <button type="submit" style={buttonStyle} onClick={handleLogin}>
          Login
        </button>
      </form>

      <div style={alreadyAccountStyle}>
        Don't have an account? <a href="/create-account" style={{ color: 'rgba(6, 107, 249, 1)', textDecoration: 'none' }}>Create an Account</a>
      </div>
    </div>
  );
};

export default Login;
