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
      <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link className="navbar-brand logo" to="/">Clyro</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/myproducts">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settings">Settings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addproduct">Add Product</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <div className="nav-link" onClick={toggleDropdown} role="button" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded={dropdownOpen}>
                  <i className="fas fa-user" title="Profile"></i>
                </div>
                <div className={`dropdown-menu dropdown-menu-right ${dropdownOpen ? "show" : ""}`} aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/profile">Profile</Link>
                  <Link className="dropdown-item" to="/support">Support</Link>
                  <Link className="dropdown-item" to="/logout">Logout</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav_seller;
