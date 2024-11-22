import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./Signup";
import Forget from "./Forgotpass";
import './Login_sin.css';
import { useEffect } from "react";

function Login() {
    useEffect(() => {
        document.title = "Login - Clyro"; // Set page title dynamically
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();
        // Add login logic here
        console.log("Login form submitted");
    };

    return (
        <>
         <body className="AllBody"> 
        <div className="container" id="container">
            <h1>Clyro</h1>
            <div className="form-container sign-in-container">
                <form onSubmit={handleLogin}>
                    <h1>Log in</h1>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="LOGIN123" 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="LOGIN123" 
                        required 
                    />
                    <Link to="/Forget" id="Forgot">Forgot your password?</Link>
                    <p className="signUP">
                        Don't have an account? 
                        <Link to="/signup" id="signUp"> Sign up</Link>
                    </p>
                    <button type="submit">Log In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <h1>Welcome Back!</h1>
                        {/* <p>Log in to your account to continue exploring.</p> */}
                    </div>
                </div>
            </div>
        </div>
        </body>
        </>
    );
}

export default Login;
