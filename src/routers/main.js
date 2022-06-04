const express = require("express");

const mainController = require("../controllers/mainController");

const router = express.Router();

router.get("/", mainController.main);

router.get("/register", mainController.register);

router.get("/login", mainController.login);

module.exports = router;

