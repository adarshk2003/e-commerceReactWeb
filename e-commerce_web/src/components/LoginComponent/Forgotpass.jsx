import './Login_sin.css';
export default function Forget() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // OTP submission logic he
        console.log("OTP submitted");
    };

    return (<>
     <body className="AllBody"> 
        <div className="container343" id="container">
            <h1>Clyro</h1>
            <div className="form-container sign-in-container">
                <form onSubmit={handleSubmit}>
                    <h1>Forgot Your Password?</h1>
                    <input 
                        type="number" 
                        placeholder="Enter OTP" 
                        className="ForgotPass" 
                        required 
                    />
                    <button type="submit">Submit OTP</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <h1>Welcome Back!</h1>
                        {/* <p>Please reset your password to regain access to your account.</p> */}
                    </div>
                </div>
            </div>
        </div>
        </body>
        </>
    );
}
