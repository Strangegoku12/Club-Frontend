import React, { useEffect, useState } from 'react'
import Sidebar from '../AdminDashboard/Sidebar'
import '../All-css/main.css'
import '../All-css/showstudent.css'
import axios from 'axios'

const Showstudent = () => {
  const [datas, setDatas] = useState([]);
  const[emaildata,setEmaildata]=useState(0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:3000/addstudent');
                setDatas(res.data);
                const emails=datas.map(item=>item.email);
                setEmaildata(emails.length)
                console.log(typeof(res.data))
                console.log(datas); // Log the data to see what was fetched
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
  return (
    <>
    <div className='main-container'>
        <div className='sidebar'>
         <Sidebar/>
        </div>
        <div className='main-dashboard'>
        <div className="students-data-container">
      <header className="header">
        <h2>Students</h2>
        <nav className="breadcrumb">
          <span>Home</span> / <span>All Students</span>
        </nav>
      </header>
      <section className="content">
        <h3>All Students Data</h3>
        <div className="search-filters">
          <input type="text" placeholder="Search by name..." className="search-input" />
          <select className="select-class">
            <option>Select Class</option>
            {/* Add class options here */}
          </select>
          <button className="search-button">SEARCH</button>
        </div>
        <table className="students-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Gender</th>
              <th>Club</th>
              <th>Year</th>
              <th>Branch</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
           {
            datas.map((e,key)=>(
              <>
              <tr key={key}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phone_no}</td>
                <td>{e.gender}</td>
                <td>{e.club}</td>
                <td>{e.year}</td>
                <td>{e.branch}</td>
                <td>{e.designation}</td>

              </tr>
              </>
            ))
           }
          </tbody>
        </table>
      </section>
    </div>
        </div>
    </div>
    </>
  )
}

export default Showstudent