// ************ Require's ************
const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();
const path = require ("path")
const multer = require('multer');
const productController = require("../controllers/productController");


const storage = multer.diskStorage({ 
  destination: function (req, file, cb) { 
     cb(null, 'public/images'); 
  }, 
  filename: function (req, file, cb) {
   cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));  } 
})

const uploadFile = multer({ storage });

//Crear un producto
router.get("/create", adminController.create);
router.post("/create",uploadFile.single('image'), adminController.store);

router.get('/:id/detail', productController.product);
router.get("/:id/edit", adminController.edit);

module.exports = router;