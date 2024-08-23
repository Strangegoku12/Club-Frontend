import React, { useState } from 'react';
import axios from 'axios';
import '../All-css/Register.css'
import { Link, Navigate } from 'react-router-dom';
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    address: '',
    password: '',
    roll_no:'',
    proper_roll:'Admin'
  });
  const [showpassword,setShowpassword]=useState(false)

  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const togglepassword=()=>{
    setShowpassword(!showpassword); 
  }
  const validatePassword = (password) => {
    const firstChar = password.charAt(0);
    return firstChar === firstChar.toUpperCase();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    // Validate password
    if (!validatePassword(formData.password)) {
      setError('Password must start with an uppercase letter.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/register', formData);
      alert("Successfully registered");
      navigate('/'); 
      console.log('User registered:', response.data);
      
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setError("Email Already occurs");
        } else {
          setError('An unexpected error occurred.');
        }
      } else {
        setError('Failed to connect to the server.');
      }
    }
  };

  return (
    <div className='registerforms'>
    <div className="register-form">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input
            type="number"
            name="roll_no"
            value={formData.roll_no}
            onChange={handleChange}
            required
          />
          </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <select
                  name="proper_roll"
                  value={formData.proper_roll}
                  onChange={handleChange}
                  className="select-field"
                  required
                >
                  <option value="Admin">Admin</option>
                  <option value="Manager">Guide</option>
                </select>


        <div className="form-group">
          <label>Password:</label>
          <input
            type={showpassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <p className='hideopen'  onClick={togglepassword}>{showpassword ? <LuEye />:<LuEyeOff />
          }</p>
        </div>

        <button type="submit">Register</button>
      </form>
      <p>
        Already Created Account? <Link to="/"><span className="register-link">Login</span></Link>
      </p>
    </div>
    </div>
  );
};

export default RegisterForm;
