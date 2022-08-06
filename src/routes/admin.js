// ************ Require's ************
const express = require("express");
const router = express.Router();
const path = require("path")
const multer = require('multer');
const adminController = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");
const validateProductMiddleware = require("../middlewares/validateProductMiddleware");


const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, 'public/images');
   },
   filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
   }
})

const uploadFile = multer({ storage });
const validations = require('../middlewares/validateProductMiddleware');


router.get('/administrar', adminMiddleware, adminController.index);
//Crear un producto
router.get("/create", adminMiddleware, adminController.create);
router.post("/create", uploadFile.single('image'), validations, adminMiddleware, adminController.store);
router.get('/detail/:id', adminMiddleware, adminController.show);
router.get("/edit/:id", adminMiddleware, adminController.edit);
router.put("/edit/:id", uploadFile.single('image'), adminMiddleware, adminController.update);
router.get('/delete/:id', adminMiddleware, adminController.destroy);

module.exports = router;