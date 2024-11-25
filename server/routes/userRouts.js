const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
// const { accessControl } = require('../utils/access-controll');

// // Middleware to set access control
// function setAccessControl(access_types) {
//     return (req, res, next) => {
//         accessControl(access_types, req, res, next);
//     };
// }

// Define routes
router.post('/users', userController.createUser);

// Correct export
module.exports = router;
