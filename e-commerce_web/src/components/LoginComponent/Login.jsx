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
                <h1>Clyro</h1>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Log in</h1>
                        <input type="email" placeholder="Email" className="LOGIN123" />
                        <input type="password" placeholder="Password" className="LOGIN123" />
                        <a href="#">Forgot your password?</a>
                        <p className="signUP">don't have an account? <Link to="/signup" id="signUp">sign-up</Link></p>
                        <button>Sign In</button>
                    </form>
                </div>
                {/* <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>Welcome Back!</h1>
                            {/* <p>
                                To keep connected with us please login with your personal info
                            </p> *
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
}

export default Login;


// https://www.wix.com/website-template/view/html/2247?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fonline-store%2Ffashion-clothing%2F2&tpClick=view_button&esi=7f584199-12f6-4071-808e-9a2d655ea146
// https://www.wix.com/website-template/view/html/2512?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fonline-store%2Ffashion-clothing&tpClick=view_button&esi=233d4bb4-ed3d-470a-ace3-a6b192813471
// https://www.wix.com/website-template/view/html/3212?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fonline-store&tpClick=view_button&esi=1bdf573f-12df-4d91-8b9e-a4f8c27591f7
// https://websitedemos.net/t-shirts-store-04/?customize=template


