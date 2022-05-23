const express = require("express");

const registroController = require("../controllers/registroController");

const router = express.Router();

router.get('/', registroController.registro);


module.exports = router;