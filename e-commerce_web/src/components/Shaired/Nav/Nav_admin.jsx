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
          <li><a href="/users">Users</a></li>
          <li><a href="/reports">Reports</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
        <h1 className="logo">Admin </h1>
        <div className="nav-icons">
          <Link
            to={{ pathname: "/notifications", }} className="nav-icon" title="Notifications" >
            <i className="fas fa-bell"></i>
          </Link>
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
            <a href="#">Manage Users</a>
            <ul className="dropdown-menu">
              <li><a href="/users/list">User List</a></li>
              <li><a href="/users/roles">User Roles</a></li>
              <li><a href="/users/permissions">Permissions</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">Order Management</a>
            <ul className="dropdown-menu">
              <li><a href="/orders/view">View Orders</a></li>
              <li><a href="/orders/returns">Manage Returns</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">Content Management</a>
            <ul className="dropdown-menu">
              <li><a href="/content-management/blog">Blog Posts</a></li>
              <li><a href="/content-management/pages">Pages</a></li>
              <li><a href="/content-management/announcements">Announcements</a></li>
            </ul>
          </li>
          <li><a href="/reviews-feedback">Reviews & Feedback</a></li>
          <li><a href="/analytics">Analytics</a></li>
          <li><a href="/support">Support</a></li>
        </ul>
      </div>
    </div>
  );
}

export default AdminNav;
