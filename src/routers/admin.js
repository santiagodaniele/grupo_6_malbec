const express = require("express");
const multer = require('multer');
const path = require ("path")

const storage = multer.diskStorage({ 
  destination: function (req, file, cb) { 
     cb(null, '/public/images'); 
  }, 
  filename: function (req, file, cb) { 
     cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
})

const uploadFile = multer({ storage });

const adminController = require("../controllers/adminController");

const router = express.Router();

router.get("/create", adminController.create);

router.post('/create', uploadFile.single('subir-archivo'), adminController.create);

router.get("/:id/edit", adminController.edit);

module.exports = router;