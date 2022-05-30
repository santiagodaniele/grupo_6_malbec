const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

router.get("/cart", userController.cart);


module.exports = router;

