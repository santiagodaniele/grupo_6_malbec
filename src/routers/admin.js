const express = require("express");

const adminController = require("../controllers/adminController");

const router = express.Router();

router.get("/upload", adminController.upload);

router.get("/edit", adminController.edit);

module.exports = router;