import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaBook, FaPlus, FaListAlt } from "react-icons/fa";
import '../All-css/sidebar.css';
const GuideSidebar = () => {
  return (
    <div className="sidebar">
    <div className="logo">MyApp</div>
    <ul className="sidebar-menu">
      <li>
        <Link to="/guidedashboard" className="sidebar-link">
          <FaHome style={{ marginRight: '10px' }} /> Dashboard
        </Link>
      </li>
      <hr className="divider" />
      <li>
        <h1 className="sidebar-link">
          <FaUsers style={{ marginRight: '10px' }} /> Club Students
        </h1>
        <ul className="dropdown-menu">
          <li>
            <Link to="/guideaddstudent" className="sidebar-link">
              <FaPlus style={{ marginRight: '10px' }} /> Add Students
            </Link>
          </li>
          <li>
            <Link to="/guideshowstudent" className="sidebar-link">
              <FaListAlt style={{ marginRight: '10px' }} /> Show Students
            </Link>
          </li>
        </ul>
      </li>
      <hr className="divider" />
      <li>
        <h1 className="sidebar-link">
          <FaBook style={{ marginRight: '10px' }} /> Guides
        </h1>
        <ul className="dropdown-menu">
          <li>
            <Link to="/guideshowguide" className="sidebar-link">
              <FaListAlt style={{ marginRight: '10px' }} /> Show Guides
            </Link>
          </li>
        </ul>
      </li>
      <hr className="divider" />
      <li>
        <Link to="/expenditure" className="sidebar-link">
          <FaUsers style={{ marginRight: '10px' }} /> Expenditure
        </Link>
      </li>
    </ul>
  </div>
  )
}

export default GuideSidebar