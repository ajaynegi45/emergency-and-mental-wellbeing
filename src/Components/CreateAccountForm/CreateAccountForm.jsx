import React, { useState } from 'react';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom'; 
import { register } from '../../services/AuthService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreateAccountForm = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate=useNavigate();
  const [error, setError] = useState({
    errors: {},
    isError: false
  });
  const handleInputChange = (field, value) => {
    setData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  // Track focus for inputs
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  // Helper function to handle focus change
  const handleFocus = (field) => {
    setFocused((prevState) => ({ ...prevState, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocused((prevState) => ({ ...prevState, [field]: false }));
  };
  const submitForm = (event) => {
    event.preventDefault();

    let validationErrors = {};
    let hasError = false;

    if (!data.name) {
        validationErrors.name = "Name is required";
        hasError = true;
    }
    if (!data.email) {
        validationErrors.email = "Email is required";
        hasError = true;
    }
    if (!data.password) {
        validationErrors.password = "Password is required";
        hasError = true;
    }
    if (data.password!=data.confirmPassword) {
        validationErrors.confirmPassword = "Please make sure your passwords match";
        hasError = true;
    }

    if (hasError) {
        setError({ errors: validationErrors, isError: true });
        console.log("Error: " + validationErrors);
        return;
    }
    register(data).then((resp)=>{
      toast.success("User registered successfully");
      navigate("/login")
    })
    .catch((err) => {
      console.error("Error during registration", err);
      toast.error("Error registering user");
    });
  }
  const formContainerStyle = {
    backgroundColor:'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const inputGroupStyle = {
    marginBottom: '15px',
    width: '100%',
    maxWidth: '950px',
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
    border: `1px solid ${isFocused ? 'rgba(69, 143, 246, 1)' : '#ccc'}`,
    fontFamily: '"Mulish", sans-serif',
    boxShadow: isFocused ? '0 0 5px rgba(69, 143, 246, 0.7)' : 'none',
    transition: 'box-shadow 0.3s ease-in-out',
  });

  const buttonStyle = {
    width: '70%',
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
    paddingRight: '500px',
    textAlign: 'center',
    marginTop: '15px',
    fontSize: '19px',
    color: '#333',
  };

  return (
    <div style={formContainerStyle}>
      <div style={titleStyle}>Create an Account</div>

      {/* Full Name */}
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Full Name</label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          onFocus={() => handleFocus('name')}
          onBlur={() => handleBlur('name')}
          style={inputStyle(focused.name)} // Pass the focus state
        />
      </div>

      {/* Email */}
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Email</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
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
          value={data.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
          onFocus={() => handleFocus('password')}
          onBlur={() => handleBlur('password')}
          style={inputStyle(focused.password)} // Pass the focus state
        />
      </div>

      {/* Confirm Password */}
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Confirm Password</label>
        <input
          type="password"
          value={data.confirmPassword}
          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
          onFocus={() => handleFocus('confirmPassword')}
          onBlur={() => handleBlur('confirmPassword')}
          style={inputStyle(focused.confirmPassword)} // Pass the focus state
        />
      </div>

      {/* Create Account Button */}
      <button style={buttonStyle} type='submit' onClick={submitForm}>Create Account</button>

      {/* Already have an account? */}
      <div style={alreadyAccountStyle}>
        Already have an account?{' '}
        <Link to="/login" style={{ color: 'rgba(6, 107, 249, 1)', textDecoration: 'none' }}>
          Log In
        </Link>
      </div>
    </div>
  );
};

export default CreateAccountForm;
