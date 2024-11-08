import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import './Login_sin.css';

function Signup() {
    console.log("signupp is rendering .......");
    return (
        <>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" required className="LOGIN123" />
                        <input type="email" placeholder="Email" required className="LOGIN123" />
                        <input type="password" placeholder="Password" required className="LOGIN123" />
                        <div>
                        <input type="checkbox" name="seller" id="seller" />
                            <label htmlFor="IsSeller"> signup as seller?</label>
                        </div>
                        <p className="login">already have a account <Link to="/login" id="login">login</Link></p>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start your journey with us</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
