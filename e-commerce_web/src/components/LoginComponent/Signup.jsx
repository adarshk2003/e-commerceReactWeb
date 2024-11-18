import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login_sin.css';

function Signup() {
    console.log("Signup is rendering .......");

    // State for form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSeller, setIsSeller] = useState(false);

    // State for error messages
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // Regular expressions for validation
    const nameReg = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passReg = /^.{6,}$/;

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent default form submission

        // Clear previous errors
        setNameError('');
        setEmailError('');
        setPasswordError('');

        // Validation
        let valid = true;

        if (!name) {
            setNameError("Name is required!");
            valid = false;
        } else if (!nameReg.test(name)) {
            setNameError("Invalid name!");
            valid = false;
        }

        if (!email) {
            setEmailError("Email is required!");
            valid = false;
        } else if (!emailReg.test(email)) {
            setEmailError("Invalid email!");
            valid = false;
        }

        if (!password) {
            setPasswordError("Password is required!");
            valid = false;
        } else if (!passReg.test(password)) {
            setPasswordError("Password must be at least 6 characters.");
            valid = false;
        }

        // If validation fails, stop here
        if (!valid) {
            return;
        }

        // Prepare data for submission
        const datas = {
            name,
            email,
            password,
            isSeller,
        };

        console.log("Datas to be submitted:", datas);

        try {
            const response = await fetch("/users", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datas),
            });

            if (response.ok) {
                // Redirect or show success message
                window.location.href = "viewUser.html";
            } else {
                const errorText = await response.text();
                alert(errorText || "Something went wrong");
            }
        } catch (error) {
            console.error("Error during submission:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <span>or use your email for registration</span>

                        {/* Name Input */}
                        <input
                            type="text"
                            placeholder="Name"
                            required
                            className="LOGIN123"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {nameError && <div className="error">{nameError}</div>}

                        {/* Email Input */}
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            className="LOGIN123"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && <div className="error">{emailError}</div>}

                        {/* Password Input */}
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            className="LOGIN123"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {passwordError && <div className="error">{passwordError}</div>}

                        {/* Checkbox for Seller */}
                        <div>
                            <input
                                type="checkbox"
                                name="seller"
                                id="seller"
                                checked={isSeller}
                                onChange={() => setIsSeller(!isSeller)}
                            />
                            <label htmlFor="seller">Signup as seller?</label>
                        </div>

                        <p className="login">
                            Already have an account? <Link to="/login" id="login">Login</Link>
                        </p>

                        <button type="submit">Sign Up</button>
                    </form>
                </div>

                {/* <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Hello, Friend!</h1>
                            {/* <p>Enter your personal details and start your journey with us</p> 
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
}

export default Signup;
