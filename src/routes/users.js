const express = require("express");

const usersController = require("../controllers/usersController");

const router = express.Router();

router.get("/cart", usersController.cart);


module.exports = router;

