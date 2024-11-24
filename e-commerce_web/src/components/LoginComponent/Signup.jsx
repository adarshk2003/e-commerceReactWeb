import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login_sin.css';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSeller, setIsSeller] = useState(false);

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear previous errors
        setNameError('');
        setEmailError('');
        setPasswordError('');

        // Basic validation
        let valid = true;
        if (!name) {
            setNameError("Name is required!");
            valid = false;
        }
        if (!email) {
            setEmailError("Email is required!");
            valid = false;
        }
        if (!password) {
            setPasswordError("Password is required!");
            valid = false;
        }

        if (!valid) return;

        // Prepare the data for submission
        const userData = { name, email, password, isSeller };

        try {
            const response = await fetch("/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                alert("Account created successfully.");
                // Redirect to login page
                window.location.href = "/login";
            } else {
                const errorMessage = await response.text();
                alert(errorMessage || "Failed to create account.");
            }
        } catch (error) {
            console.error("Error during signup:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <body className="AllBody">
             <div className="container343" id="container343">
             <div className="form-container sign-in-container">
            <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>

                <input
                    type="text"
                    placeholder="Name"
                    className="LOGIN123"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {nameError && <p className="error">{nameError}</p>}

                <input
                    type="email"
                    placeholder="Email"
                     className="LOGIN123"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="error">{emailError}</p>}

                <input
                    type="password"
                    placeholder="Password"
                     className="LOGIN123"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <p className="error">{passwordError}</p>}

                <div>
                    <input
                        type="checkbox"
                        id="seller"
                        checked={isSeller}
                        onChange={() => setIsSeller(!isSeller)}
                    />
                    <label htmlFor="seller">Sign up as seller?</label>
                </div>

                <button type="submit">Sign Up</button>
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
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
    );
}

export default Signup;
