import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./nav.css";

function AdminNav() {
  return (
    <div className="nav-container">
      {/* Main Navbar */}
      <div className="main-nav">
        <ul className="nav-links">
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/getalluser">Users</a></li>
          <li><a href="/reports">Reports</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
        <h1 className="logo">Admin </h1>
        <div className="nav-icons">
          <Link
            to={{ pathname: "/notifications", }} className="nav-icon" title="Notifications" >
            <i className="fas fa-bell"></i>
          </Link>
          <Link to={{pathname:"/profile" ,}} className="nav-icon" title="profile">
            <i className="fas fa-user"></i>
          </Link>
          <Link to={{pathname:"/logout",}} className="nav-icon" title="logout">
           <i className="fas fa-sign-out-alt"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminNav;
