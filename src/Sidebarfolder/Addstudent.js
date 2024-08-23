import React, { useState } from 'react';
import Sidebar from '../AdminDashboard/Sidebar';
import '../All-css/addstudent.css';
import axios from 'axios';
const Addstudent = () => {
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    email: '',
    year: '',
    club: '',
    phone_no: '',
    designation: '',
    gender: '',
    branch: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     
    try {
      const response = await axios.post('http://localhost:3000/addstudent', studentInfo);
      console.log('User:', response.data.user);
      alert("Added Student Successfully")
      setStudentInfo({
        name: '',
        email: '',
        year: '',
        club: '',
        phone_no: '',
        designation: '',
        gender: '',
        branch: ''
      });
    } catch (err) {
  console.log("no data register")
    }
  };

  return (
    <div className="main-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-dashboard">
        <div className="admit-form-container">
          <header className="header">
            <h2>Students</h2>
            <nav className="breadcrumb">
              <span>Home</span> / <span>Student Admit Form</span>
            </nav>
          </header>
          <section className="content">
            <h3>Add New Students</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Name *"
                  name="name"
                  value={studentInfo.name}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
                <input
                  type="text"
                  placeholder="Phone No *"
                  name="phone_no"
                  value={studentInfo.phone_no}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={studentInfo.email}
                  onChange={handleChange}
                  className="input-field"
                />
                <select
                  name="gender"
                  value={studentInfo.gender}
                  onChange={handleChange}
                  className="select-field"
                  required
                >
                  <option value="">Please Select Gender *</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="other">other</option>
                </select>
                <select
                  name="club"
                  value={studentInfo.club}
                  onChange={handleChange}
                  className="select-field"
                  required
                >
                  <option value="">Please Select Club *</option>
                  <option value="vpaksh">vpaksh</option>
                  <option value="ecell">ecell</option>
                  <option value="tedxkiet">tedxkiet</option>
                  <option value="innogeeks">innogenes</option>
                </select>
              
                <input
                  type="number"
                  placeholder="year"
                  name="year"
                  value={studentInfo.year}
                  onChange={handleChange}
                  className="input-field"
                />
                <select
                  name="branch"
                  value={studentInfo.branch}
                  onChange={handleChange}
                  className="select-field"
                  required
                >
                  <option value="">Please Select Branch *</option>
                  <option value="civil">civil</option>
                  <option value="cs">computer Science</option>
                  <option value="mechanical">mechanical</option>
                  <option value="electronics">electronics</option>
                </select>
                <select
                  name="designation"
                  value={studentInfo.designation}
                  onChange={handleChange}
                  className="select-field"
                >
                  <option value="">Please Select Position</option>
                  <option value="president">president</option>
                  <option value="vice-president">vice-president</option>
                  <option value="member">member</option>
                </select>
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Addstudent;
