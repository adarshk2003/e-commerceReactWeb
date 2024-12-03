const express = require('express');
const productController = require('../controller/productController');
const router = express.Router();
const accessControl = require("../utils/access_control").accessControl;

function setAccessControl(...accessTypes) {
    return (req, res, next) => {
        accessControl(accessTypes, req, res, next);
    };
}

router.post('/add', setAccessControl("3"), productController.addProduct);
router.get('/getproduct',productController.getProduct);

module.exports = router;
