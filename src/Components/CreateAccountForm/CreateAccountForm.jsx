import React, { useState } from 'react';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom'; 
import { register } from '../../services/AuthService';

import "../CreateAccountForm/CreateAccountForm.css";
import { toast } from 'sonner';
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
        toast.error("Invalid credentials. Please try again");
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

  return (
    <div className='create-form-container'>
      <div className='title'>Create an Account</div>

      {/* Full Name */}
      <div className='create-input-group'>
        <label className='label'>Full Name</label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          onFocus={() => handleFocus('name')}
          onBlur={() => handleBlur('name')}
          className='input' 
        />
      </div>

      {/* Email */}
      <div className='create-input-group'>
        <label className='label'>Email</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          onFocus={() => handleFocus('email')}
          onBlur={() => handleBlur('email')}
          className='input'
        />
      </div>

      {/* Password */}
      <div className='create-input-group'>
        <label className='label'>Password</label>
        <input
          type="password"
          value={data.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
          onFocus={() => handleFocus('password')}
          onBlur={() => handleBlur('password')}
          className='input'
        />
      </div>

      {/* Confirm Password */}
      <div className='create-input-group'>
        <label className='label'>Confirm Password</label>
        <input
          type="password"
          value={data.confirmPassword}
          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
          onFocus={() => handleFocus('confirmPassword')}
          onBlur={() => handleBlur('confirmPassword')}
          className='input'
        />
      </div>

      {/* Create Account Button */}
      <button className='create-button' type='submit' onClick={submitForm}>Create Account</button>

      {/* Already have an account? */}
      <div className='already-account'>
        Already have an account?{' '}
        <Link to="/login" style={{ color: 'rgba(6, 107, 249, 1)', textDecoration: 'none' }}>
          Log In
        </Link>
      </div>
    </div>
  );
};

export default CreateAccountForm;
