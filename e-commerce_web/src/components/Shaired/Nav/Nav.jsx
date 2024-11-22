import React from "react";
import "./nav.css";

function Nav() {
  return (
    <div className="nav-container">
      {/* Main Navbar */}
      <div className="main-nav">
        <h1 className="logo">Clyro</h1>
        <ul className="nav-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="nav-icons">
          <a href="/favorites" className="nav-icon" title="Favorites">
            <i className="fas fa-heart"></i> {/* Font Awesome Heart */}
          </a>
          <a href="/cart" className="nav-icon" title="Cart">
            <i className="fas fa-shopping-cart"></i> {/* Font Awesome Cart */}
          </a>
          <a href="/profile" className="nav-icon"  title="profile">
            <i className="fas fa-user"></i> {/* Font Awesome User */}
          </a>
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
        </ul>
      </div>
    </div>
  );
}

export default Nav;
