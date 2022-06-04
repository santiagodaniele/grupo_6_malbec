const express = require("express");

const productController = require("../controllers/productController");

const router = express.Router();

router.get("/", productController.product);

router.get("/list", productController.productList);

router.get("/product/:id", productController.product);

module.exports = router;