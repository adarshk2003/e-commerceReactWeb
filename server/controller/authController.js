const success_function = require('../utils/response-handler').success_function;
const error_function = require('../utils/response-handler').error_function;
const users = require('../db/models/user');
// const resetPassword = require('../utils/email/resetpass').resetPassword
// const sendEmail = require("../utils/email-send").sendEmail;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const dotenv = require('dotenv');
const user_type = require('../db/models/user_type');
dotenv.config();


exports.login = async function (req, res) {
    try {
        let email = req.body.email.trim().toLowerCase(); // Trim and convert to lowercase
        console.log("email : ", email);

        let password = req.body.password;
        console.log("password : ", password);

        // Validations
        let user = await users.findOne({ email });
        console.log("user : ", user);

        if (user) {
            let db_password = user.password;
            console.log("db_password : ", db_password);

            let passwordMatch = bcrypt.compareSync(password, user.password);
            console.log("passwordMatch : ", passwordMatch);            

            let _id = user._id;
            console.log(_id);
            let user_type = user.user_type;
            console.log(user_type);

            if (passwordMatch) {
                let token = jwt.sign({ user_id: user._id }, process.env.PRIVATE_KEY, { expiresIn: "10d" });

                let response = success_function({
                    statusCode: 200,
                    data: {
                        token,
                        _id,
                        user_type,
                    },
                    message: "Login successful",
                });

                res.status(response.statusCode).send(response);
                return;
            } else {
                let response = error_function({
                    statusCode: 400,
                    message: "Invalid password",
                });

                res.status(response.statusCode).send(response);
                return;
            }
        } else {
            let response = error_function({
                statusCode: 404,
                message: "User not found",
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




// exports.forgotPassword = async (req, res) => {
//   const { email } = req.body;
//   const user = await users.findOne({ email });

//   if (!user) {
//     return res.status(404).send('User not found');
//   }

//   const resetToken = crypto.randomBytes(32).toString('hex');
//   user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
//   user.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // Token expires in 10 minutes

//   await user.save();

//   const resetUrl = `${req.protocol}://${req.get('host')}/reset-password/${user._id}/${resetToken}`;

//   const message = await resetPasswordTemplate(user.name, resetUrl);

//   try {
//     await sendEmail({
//       email: user.email,
//       subject: 'Password Reset',
//       message, 
//     });
//     res.status(200).send('Reset link sent to your email');
//   } catch (error) {
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpire = undefined;
//     await user.save();
//     res.status(500).send('Error sending email');
//   }
// };

// exports.resetPassword = async (req, res) => {
//     try {
//         const { id, token } = req.params;
//         const { password } = req.body;

//         const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

//         const user = await User.findOne({
//             _id: id,
//             resetPasswordToken: hashedToken,
//             resetPasswordExpire: { $gt: Date.now() }
//         });

//         if (!user) {
//             return res.status(400).send('Invalid or expired token');
//         }

//         // Check if the new password is the same as the old password
//         const isSamePassword = await bcrypt.compare(password, user.password);
//         if (isSamePassword) {
//             return res.status(400).send('New password must be different from the old password');
            
//         }

//         // Update the user's password
//         user.password = await bcrypt.hash(password, 12);
//         user.resetPasswordToken = undefined;
//         user.resetPasswordExpire = undefined;
//         await user.save();

//         res.send('Password successfully reset');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error resetting password');
//     }
// };


