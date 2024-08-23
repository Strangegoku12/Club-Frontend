import React, { useState } from 'react';
import '../All-css/login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { LuEye, LuEyeOff } from "react-icons/lu";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showpassword, setShowpassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      const { user } = response.data;

      alert("Login Successfully");

      // Check the user's role and navigate accordingly
      if (user.proper_roll === 'Admin') {
        navigate('/main'); 
      } else {
        navigate('/guidedashboard'); 
      }
    } catch (err) {
      if (err.response) {
        setError('Invalid username or password');
      }
    }
  };

  const togglepassword = () => {
    setShowpassword(!showpassword);
  };

  return (
    <div className='loginforms'>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type={showpassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className='hideopen' onClick={togglepassword}>
              {showpassword ? <LuEye /> : <LuEyeOff />}
            </p>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
          <p>
            Create New Account? <Link to="/register"><span className="register-link">Register</span></Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
