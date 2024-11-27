import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav_seller() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="nav-container">
      {/* Main Navbar */}
      <div className="main-nav">
        <ul className="nav-links">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/addproduct">Add Product</Link></li>
        </ul>
        <h1 className="logo">Clyro</h1>
        <div className="nav-icons">
          <div className="nav-icon profile-dropdown" onClick={toggleDropdown}>
            <i className="fas fa-user" title="Profile"></i>
          </div>
          {dropdownOpen && (
            <ul className="dropdown-content">
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/support">Support</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav_seller;
