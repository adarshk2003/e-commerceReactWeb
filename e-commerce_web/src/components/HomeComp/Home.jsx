import React from 'react';
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaUser, FaCog, FaComment, FaRetweet, FaHeart, FaShare } from 'react-icons/fa';
import './home.css';

function Home() {
    return (
        <div className="app">
            {/* Sidebar */}
            <div className="sidebar">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <FaHome className="icon" />
                            <span className="text">Home</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <FaHashtag className="icon" />
                            <span className="text">Explore</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <FaBell className="icon" />
                            <span className="text">Notifications</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <FaEnvelope className="icon" />
                            <span className="text">Messages</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <FaUser className="icon" />
                            <span className="text">Profile</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <FaCog className="icon" />
                            <span className="text">Settings</span>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <h1>Home</h1>
                <div className="tweet-input">
                    <textarea
                        className="form-control"
                        placeholder="What's happening?"
                        rows="3"
                    ></textarea>
                    <button className="btn btn-primary mt-2">Tweet</button>
                </div>
                <div className="tweets">
                    {/* Tweet 1 */}
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">John Doe</h5>
                            <p className="card-text">This is a sample tweet!</p>
                            <img
                                src="https://via.placeholder.com/300"
                                alt="Tweet"
                                className="img-fluid rounded mb-2"
                            />
                            <div className="d-flex justify-content-between">
                                <FaComment className="icon-action" />
                                <FaRetweet className="icon-action" />
                                <FaHeart className="icon-action" />
                                <FaShare className="icon-action" />
                            </div>
                        </div>
                    </div>
                    {/* Tweet 2 */}
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Jane Smith</h5>
                            <p className="card-text">
                                Another tweet with a photo to showcase
                                responsiveness!
                            </p>
                            <img
                                src="https://via.placeholder.com/400x200"
                                alt="Tweet"
                                className="img-fluid rounded mb-2"
                            />
                            <div className="d-flex justify-content-between">
                                <FaComment className="icon-action" />
                                <FaRetweet className="icon-action" />
                                <FaHeart className="icon-action" />
                                <FaShare className="icon-action" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
