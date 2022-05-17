const express = require("express");

const carritoController = require("../controllers/carritoController");

const router = express.Router();

router.get("/", carritoController.index);


module.exports = router;

