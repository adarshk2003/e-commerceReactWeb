const product = require('../db/models/product');
const success_function = require('../utils/response-handler').success_function;
const error_function = require('../utils/response-handler').error_function;
const fileUpload = require('../utils/fileUpload').fileUpload;


exports.addProduct = async function (req, res) {
    let body = req.body;
    let name = req.body.name;
    let description = req.body.description;
    let category = req.body.category;
    let price = req.body.price;
    let quantity = req.body.quantity;
    let image = req.body.image;
}