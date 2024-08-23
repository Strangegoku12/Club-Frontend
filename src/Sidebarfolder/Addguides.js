import React, { useState } from 'react'
import Sidebar from '../AdminDashboard/Sidebar'
import axios from 'axios';

const Addguides = () => {
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    email: '',
    club: '',
    phone_no: '',
    department: '',
    gender: '',
    alloted_money: ''
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
      const response = await axios.post('http://localhost:3000/addguides', studentInfo);
      console.log('User:', response.data.user);
      alert("Added Student Successfully")
      setStudentInfo({
        name: '',
        email: '',
        club: '',
        phone_no: '',
        department: '',
        gender: '',
      alloted_money: ''
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
                placeholder="alloted_money"
                name="alloted_money"
                value={studentInfo.alloted_money}
                onChange={handleChange}
                className="input-field"
              />
            
               
            <input
                type="text"
                placeholder="department"
                name="department"
                value={studentInfo.department}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </section>
      </div>
    </div>
  </div>
    )
}

export default Addguides