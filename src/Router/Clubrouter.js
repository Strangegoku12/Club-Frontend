import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../Login and register/Login';
import RegisterForm from '../Login and register/RegisterForm';
import '../index.css'
import Main from '../AdminDashboard/Main';
import Showstudent from '../Sidebarfolder/Showstudent';
import Addstudent from '../Sidebarfolder/Addstudent';
import Addguides from '../Sidebarfolder/Addguides';
import Showguides from '../Sidebarfolder/Showguides';
import Clubs from '../Sidebarfolder/Clubs';
import Guidemain from '../GuideDashboard/Guidemain';
import Expenditure from '../GuideDashboard/Expenditure';
import GuideAddStudent from '../GuideDashboard/Sidebarfolder/GuideAddstudent';
import GuideShowStudent from '../GuideDashboard/Sidebarfolder/GuideShowStudent';
import GuideShowGuide from '../GuideDashboard/Sidebarfolder/GuideShowGuide';

const ClubRouter = () => {
  return (
    <Router>
      <Routes>


      <Route path="/" element={<Login />} />
      <Route path='/register' element={<RegisterForm/>}/>
      <Route path='/main' element={<Main/>}/>
      <Route path='/guidedashboard' element={<Guidemain/>}/>
      <Route path='/show-students' element={<Showstudent/>}/>
      <Route path='/add-students' element={<Addstudent/>}/>
      <Route path='/add-guides' element={<Addguides/>}/>
      <Route path='/show-guides' element={<Showguides/>}/>
      <Route path='/clubs' element={<Clubs/>}/>
      <Route path='/expenditure' element={<Expenditure/>}/>
      <Route path='/guideaddstudent' element={<GuideAddStudent/>}/>
      <Route path='/guideshowstudent' element={<GuideShowStudent/>}/>
      <Route path='/guideshowguide' element={<GuideShowGuide/>}/>






      </Routes>
    </Router>
  );
};

export default ClubRouter;
