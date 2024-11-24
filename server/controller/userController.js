const users = require('../db/models/user');
const user_types = require('../db/models/user_type');
const { success_function, error_function } = require('../utils/response-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRout=require('../routes/userRouts').userRout
// Create User or Sign Up
exports.createUser = async function (req, res) {
    try {
        const { name, email, password, isSeller } = req.body;

        // Validate inputs
        if (!name || !email || !password) {
            return error_function(res, "All fields are required.");
        }

        // Check if user already exists
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            return error_function(res, "User already exists.");
        }

        // Fetch the appropriate user_type _id
        const userTypeDoc = await user_types.findOne({ user_type: isSeller ? 'seller' : 'regular' });
        if (!userTypeDoc) {
            return error_function(res, "Invalid user type configuration.");
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user
        const newUser = new users({
            name,
            email,
            password: hashedPassword,
            user_type: userTypeDoc._id, // Assign the correct user_type ID
        });

        // Save the user to the database
        await newUser.save();
        success_function(res, "User created successfully.");
    } catch (error) {
        error_function(res, `Error creating user: ${error.message}`);
    }
};
