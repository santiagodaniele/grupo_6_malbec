const express = require("express");

const mainController = require("../controllers/mainController");

const router = express.Router();

router.get("/", mainController.main);
router.get("/contact", mainController.contact);
router.get("/aboutus", mainController.aboutUs);
router.get("/faq", mainController.faq);


module.exports = router;

