import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./Signup";
import './Login_sin.css'

function Login() {
    console.log("login is rendering ......");
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="./login.css" />
            <title>Login</title>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <Link to="/signup" id="signIn">sign in</Link>
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Log in</h1>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <p className="signUP">don't have an account? <Link to="/signup" id="signUp">sign-up</Link></p>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        {/* <div className="overlay-panel overlay-left">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                        </div> */}
                        <div className="overlay-panel overlay-right">
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep connected with us please login with your personal info
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
