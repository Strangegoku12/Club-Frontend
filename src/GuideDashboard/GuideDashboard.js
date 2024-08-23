import React, { useEffect, useState } from 'react';
import '../All-css/dashboard.css';
import { PiStudent } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { GiReceiveMoney } from "react-icons/gi";
import { BiSolidSchool } from "react-icons/bi";
import axios from 'axios';
const GuideDashboard = () => {
    const [datas, setDatas] = useState([]);
    const[emaildata,setEmaildata]=useState(0);
    const [studentdatas, setStudentdatas] = useState([]);
    const[studentemaildata,setsetudentemaildata]=useState(0);
    const [totalAllotedMoney, setTotalAllotedMoney] = useState(null);
  
      useEffect(() => {
          const fetchData = async () => {
              try {
                  const res = await axios.get('http://localhost:3000/addguides');
                  setDatas(res.data);
                  const emails=datas.map(item=>item.email);
                  setEmaildata(emails.length)
                  // Log the data to see what was fetched
              } catch (error) {
                  console.error('Error fetching data:', error);
              }
          };
          fetchData();
      }, [datas]);// Replace this with the actual user name
  
      useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:3000/addstudent');
                setStudentdatas(res.data);
                const emails=studentdatas.map(item=>item.email);
                setsetudentemaildata(emails.length)
                // Log the data to see what was fetched
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [studentdatas]);// Replace this with the actual user name
  
  
  
    useEffect(() => {
      const fetchAllotedMoney = async () => {
        try {
          const response = await axios.get('http://localhost:3000/alloted_money');
          console.log(response.data)
          setTotalAllotedMoney(response.data.total_alloted_money);
        } catch (err) {
          console.error('Failed to fetch allotted money:', err);
        }
      };
  
      fetchAllotedMoney();
    }, []);
    return (
      <div className='dashboard'>
        <div className='dashboard-header'>
          <div className='header-left'>
            <h1>Admin Dashboard</h1>
          </div>
          <div className='header-right'>
            <p>anany</p>
          </div>
        </div>
        <div className='dashboard-content'>
          <div className="dashboard-box">
            <div className="icon students"><PiStudent style={{fontSize:'50px'}}/></div>
            <div className="text">
              <p>Students</p>
              <h3>{studentemaildata}</h3>
            </div>
          </div>
          <div className="dashboard-box">
            <div className="icon teachers"><LiaChalkboardTeacherSolid style={{fontSize:'50px'}} /></div>
            <div className="text">
              <p>Guides</p>
              <h3>{emaildata}</h3>
            </div>
          </div>
          <div className="dashboard-box">
            <div className="icon parents"><BiSolidSchool style={{fontSize:'50px'}} /></div>
            <div className="text">
              <p>Clubs</p>
              <h3>4</h3>
            </div>
          </div>
          <div className="dashboard-box">
            <div className="icon earnings">< GiReceiveMoney style={{fontSize:'50px'}} /></div>
            <div className="text">
              <p>Total Alloted money</p>
              {totalAllotedMoney !== null ? (
          <h3>{totalAllotedMoney}</h3>
        ) : (
          <p>Loading...</p>
        )}
            </div>
          </div>  
        </div>
      </div>
    )
}

export default GuideDashboard