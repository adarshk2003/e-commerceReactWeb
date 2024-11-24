import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/HomeComp/Home';
import Favorites from './components/favComp/Fav';
import Cart from './components/cartComp/Cart';
import Profile from './components/profileComp/User';
// import Nav from './components/Shaired/Nav/Nav';
import Login from './components/LoginComponent/Login';
import Signup from './components/LoginComponent/Signup';
import Forget from './components/LoginComponent/Forgotpass';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget" element={<Forget />} />
        
        {/* Main Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        
        {/* Default Route */}
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
