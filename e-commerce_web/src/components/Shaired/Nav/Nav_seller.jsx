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
        </ul>
        <h1 className="logo">CLYRO seller</h1>
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

      {/* Secondary Navbar */}
      <div className="secondary-nav">
        <ul className="categories">
          <li className="dropdown">
            <a href="#">Manage Products</a>
            <ul className="dropdown-menu">
              <li><a href="/products/add">Add New Product</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">Customer Engagement</a>
            <ul className="dropdown-menu">
              <li><a href="/customers/list">Customer List</a></li>
              <li><a href="/customers/messages">Messages</a></li>
            </ul>
          </li>
          <li><a href="/promotions">Promotions</a></li>
          <li><a href="/reports">Reports</a></li>
          <li><a href="/support">Support</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Nav_seller;
