const express = require("express");

const productController = require("../controllers/productController");

const router = express.Router();

router.get("/", productController.product);

router.get("/list", productController.productList);

router.get("/vinos", productController.vinos);

router.get("/cervezas", productController.cervezas);

router.get("/spirits", productController.spirits);

router.get("/:id", productController.product);

module.exports = router;