// ************ Require's ************
const express = require("express");
const router = express.Router();
const path = require ("path")
const multer = require('multer');
const adminController = require("../controllers/adminController");


const storage = multer.diskStorage({ 
  destination: function (req, file, cb) { 
     cb(null, 'public/images'); 
  }, 
  filename: function (req, file, cb) {
   cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));  } 
})

const uploadFile = multer({ storage });


router.get('/administrar', adminController.index);
//Crear un producto
router.get("/create", adminController.create);
router.post("/create",uploadFile.single('image'), adminController.store);
router.get('/detail/:id', adminController.show);
router.get("/edit/:id", adminController.edit);
router.put("/edit/:id", uploadFile.single('image'), adminController.update);
router.get('/delete/:id', adminController.destroy);

module.exports = router;