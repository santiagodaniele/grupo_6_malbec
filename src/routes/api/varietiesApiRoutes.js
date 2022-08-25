const express = require('express');
const router = express.Router();
const varietiesAPIController = require('../../controllers/api/varietiesAPIController');

router.get('/', varietiesAPIController.list);

module.exports = router;