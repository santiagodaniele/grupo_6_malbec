const express = require("express");
const router = express.Router();
const path = require('path');

const usersController = require("../controllers/usersController");
const validateRegisterMiddleware = require("../middlewares/validateRegisterMiddleware");

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');


// Vista del formulario de registro
router.get("/register", guestMiddleware, usersController.register);

// Procesar el registro
// router.post("/register", uploadFile.single('image'), validations, usersController.processRegister);
router.post("/register", uploadFile.single('image'), validations, usersController.create);
// Vista del formulario de login
router.get("/login", guestMiddleware, usersController.login);

// Procesar el Login
router.post("/login", usersController.processLogin);

// Perfil del usuario
router.get('/profile', authMiddleware, usersController.profile);

//Logout
router.get('/logout/', usersController.logout);

// vista del carrito
router.get("/cart", usersController.cart);


module.exports = router;

