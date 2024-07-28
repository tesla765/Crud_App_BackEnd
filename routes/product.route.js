const express = require("express");
const Product = require("../models/product.model.js")
const router = express.Router();
const { getProducts, getProduct, createProduct, deleteProduct, updateProduct } = require('../controller/product.controller.js')


router.get('/', getProducts);

router.get("/:id", getProduct);

router.post("/", createProduct);

router.delete("/", deleteProduct);

router.put("/", updateProduct);


module.exports = router;