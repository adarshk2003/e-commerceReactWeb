const users = require('../db/models/user');
const success_function = require('../utils/response-handler').success_function;
const error_function = require('../utils/response-handler').error_function;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

exports.createUser = async function (req, res) {
    try {
        let body = req.body;
        console.log("body : ", body);

        let name = req.body.name;
        console.log("name : ", name);

        let email = req.body.email.trim().toLowerCase(); // Trim and convert to lowercase
        console.log("email : ", email);

        let password = req.body.password;
        console.log("password : ", password);

        let isSeller = req.body.isSeller;
        console.log("seller", isSeller);

        if (isSeller === true) {
            console.log("seller");
            body.user_type = '673ad1d2dd0578b3e378e82a';
        } else {
            console.log("customer");
            body.user_type = '673acf45dd0578b3e378e829';
        }

        // Validations required
        if (!name) {
            let response = error_function({
                statusCode: 400,
                message: "Name is required",
            });
            res.status(response.statusCode).send(response);
            return;
        }

        let salt = bcrypt.genSaltSync(10);
        console.log("salt : ", salt);

        let hashed_password = bcrypt.hashSync(password, salt);
        console.log("hashed_password : ", hashed_password);

        let count = await users.countDocuments({ email });
        console.log("count : ", count);

        if (count > 0) {
            let response = error_function({
                statusCode: 400,
                message: "User already exists",
            });
            res.status(response.statusCode).send(response);
            return;
        }

        body.email = email; // Ensure the email is stored in lowercase
        body.password = hashed_password; // Store the hashed password
        console.log("body : ", body);

        let new_user = await users.create(body);

        if (new_user) {
            let token = jwt.sign({ user_id: new_user._id }, process.env.PRIVATE_KEY, { expiresIn: "10d" });
            let response = success_function({
                statusCode: 201,
                data: {
                    token,
                    _id: new_user._id,
                    user_type: new_user.user_type,
                },
                message: "User created successfully",
            });
            res.status(response.statusCode).send(response);
            return;
        } else {
            let response = error_function({
                statusCode: 400,
                message: "User creation failed",
            });
            res.status(response.statusCode).send(response);
            return;
        }
    } catch (error) {
        console.log("error : ", error);
        let response = error_function({
            statusCode: 400,
            message: error.message ? error.message : "Something went wrong",
        });
        res.status(response.statusCode).send(response);
        return;
    }
}
