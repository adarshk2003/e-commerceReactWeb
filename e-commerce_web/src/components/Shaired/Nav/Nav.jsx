import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <div className="nav-container">
      {/* Main Navbar */}
      <div className="main-nav">
        <ul className="nav-links">
          <li><a href="/getallproduct">Shop</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/signup">Sign Up</a></li>
        </ul>
        <h1 className="logo">Clyro</h1>
        <div className="nav-icons">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="buttonNavs" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <Link to="/favorites" className="nav-icon" title="Favorites">
            <i className="fas fa-heart"></i>
          </Link>
          <a href="/cart" className="nav-icon" title="Cart">
            <i className="fas fa-shopping-cart"></i>
          </a>
          
          {/* User Profile with Dropdown */}
          <div className="profile-dropdown">
            <img src="/userimage.jpg" alt="User" className="user-logo" />
            <ul className="dropdown-content">
              <li><Link to="/profile"><i className="fas fa-user"></i> Profile</Link></li>
              <li><Link to="/logout"><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Secondary Navbar */}
      <div className="secondary-nav">
        <ul className="categories">
          <li className="dropdown">
            <a href="#">Men</a>
            <ul className="dropdown-menu">
              <li><a href="/men/shirts">Shirts</a></li>
              <li><a href="/men/trousers">Trousers</a></li>
              <li><a href="/men/shoes">Shoes</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">Women</a>
            <ul className="dropdown-menu">
              <li><a href="/women/dresses">Dresses</a></li>
              <li><a href="/women/shoes">Shoes</a></li>
              <li><a href="/women/accessories">Accessories</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">Kids</a>
            <ul className="dropdown-menu">
              <li><a href="/kids/clothing">Clothing</a></li>
              <li><a href="/kids/shoes">Shoes</a></li>
              <li><a href="/kids/toys">Toys</a></li>
            </ul>
          </li>
          <li><a href="/new-arrivals">New Arrivals</a></li>
          <li><a href="/sale">Sale</a></li>
          <li><a href="/sale">Clyro MAX</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
