const express = require("express");

const adminController = require("../controllers/adminController");

const router = express.Router();

router.get("/admin/upload", adminController.upload);

router.get("/admin/edit", adminController.edit);

module.exports = router;