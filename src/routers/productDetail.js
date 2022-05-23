const express = require("express");

const productDetailController = require("../controllers/productDetailController");

const router = express.Router();

router.get("/", productDetailController.product);


module.exports = router;