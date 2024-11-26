import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./nav.css";

function Nav_seller() {
  return (
    <div className="nav-container">
      {/* Main Navbar */}
      <div className="main-nav">
        <ul className="nav-links">
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/settings">Settings</a></li>
          <li><a href="/settings">add Product</a></li>

        </ul>
        <h1 className="logo">Clyro</h1>
        <div className="nav-icons">
          <Link
            to={{ pathname: "/notifications", }} className="nav-icon" title="Notifications" >
            <i className="fas fa-bell"></i>
          </Link>
          <a href="/support" className="nav-icon" title="Support">
            <i className="fas fa-life-ring"></i>
          </a>
          <a href="/profile" className="nav-icon" title="Profile">
            <i className="fas fa-user"></i>
          </a>
          <a href="/logout" className="nav-icon" title="Logout">
            <i className="fas fa-sign-out-alt"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav_seller;
