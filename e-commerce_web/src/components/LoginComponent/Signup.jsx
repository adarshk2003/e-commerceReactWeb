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
        const response = await fetch("http://localhost:5000/users", {  // Make sure the URL matches your backend
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (response.ok) {
            const data = await response.json();
            alert(data.message);  // You can display the success message returned from the server
            window.location.href = "/login";  // Redirect to login page
        } else {
            const errorData = await response.json();
            alert(errorData.message || "Failed to create account.");  // Handle errors from backend
        }
    } catch (error) {
        console.error("Error during signup:", error);
        alert("An error occurred. Please try again.");
    }
};
