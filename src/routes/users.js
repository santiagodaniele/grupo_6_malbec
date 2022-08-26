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

// Editar perfil
router.get('/profileEdit/:id', usersController.profileEdit);
router.put("/profileEdit/:id", uploadFile.single('image'), usersController.updateProfile);

//Logout
router.get('/logout/', usersController.logout);

// Listar usuarios
router.get('/userList', adminMiddleware, usersController.userList);

// Vista de un usuario
router.get('/userDetail/:id', adminMiddleware, usersController.show);

// Formulario de edicion de usuario
router.get("/userEdit/:id", adminMiddleware, usersController.edit);

// Editar usuario
router.put("/userEdit/:id", uploadFile.single('image'), adminMiddleware, usersController.update);

// Eliminar usuario
router.get('/delete/:id', adminMiddleware, usersController.destroy);


// vista del carrito
router.get("/cart", usersController.cart);


module.exports = router;

