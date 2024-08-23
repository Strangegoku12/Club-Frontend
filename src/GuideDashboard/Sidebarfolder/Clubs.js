import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../AdminDashboard/Sidebar';
import '../All-css/dashboard.css';
import { PiStudent } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { GiReceiveMoney } from "react-icons/gi";
import { BiSolidSchool } from "react-icons/bi";
import '../All-css/club.css';

const Clubs = () => {

  return (
    <>
      <div className='main-container'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='main-dashboard'>
          <div className='dashboard'>
            <div className='dashboard-header'>
              <div className='header-left'>
                <h1>Admin Dashboard</h1>
              </div>
              <div className='header-right'>
                <p>hjk</p>
              </div>
            </div>
            <div className='dashboard-content'>
            
              <div className="dashboard-box">
                <div className="icon students">
                  <PiStudent style={{ fontSize: '50px' }} />
                </div>
                <div className="text">
                  <p>Vpaksh</p>
                </div>
              </div>
              <div className="dashboard-box">
                <div className="icon teachers">
                  <LiaChalkboardTeacherSolid style={{ fontSize: '50px' }} />
                </div>
                <div className="text">
                  <p>Ecell</p>
                </div>
              </div>
              <div className="dashboard-box">
                <div className="icon parents">
                  <BiSolidSchool style={{ fontSize: '50px' }} />
                </div>
                <div className="text">
                  <p>TedxKiet</p>
                </div>
              </div>
              <div className="dashboard-box">
                <div className="icon earnings">
                  <GiReceiveMoney style={{ fontSize: '50px' }} />
                </div>
                <div className="text">
                  <p>Innogeeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clubs;
