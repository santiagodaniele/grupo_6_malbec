const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body } = require('express-validator');

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, 'public/images/users'); 
    }, 
    filename: function (req, file, cb) {
     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));  } 
  })
  
  const uploadFile = multer({ storage });

const usersController = require("../controllers/usersController");

// variable de validaciones
const validations = [
    body('firstname').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('lastname').notEmpty().withMessage('Tienes que escribir un apellido'),
    // body('day').notEmpty().withMessage('Elige un día'),
    // body('month').notEmpty().withMessage('Elige un mes'),
    // body('year').notEmpty().withMessage('Escribe el año'),
    // body('documentType').notEmpty().withMessage('Elige un tipo de documento'),
    // body('document').notEmpty().withMessage('Escribe tu nro de documento'),
    // body('street').notEmpty().withMessage('Tienes que escribir una calle'),
    // body('number').notEmpty().withMessage('Indica la altura'),
    // body('location').notEmpty().withMessage('Escribe tu localidad'),
    // body('province').notEmpty().withMessage('Escribe tu ciudad'),
    // body('phone').notEmpty().withMessage('Por favor escribe un teléfono'),
    body('email')
    .notEmpty().withMessage('Ingrese un email').bail()
    .isEmail().withMessage('Ingrese un correo válido'),
    body('password').notEmpty().withMessage('Elige una constraseña'),
    body('avatar').custom((value, {req}) =>{
        let file = req.file;
        if(!file) {
            throw new Error('Tienes que subir una imagen');
        }
        return true;
    })

];


// Vista del formulario de registro
router.get("/register", usersController.register);

// Procesar el registro
router.post("/register",uploadFile.single('avatar'), validations, usersController.store);

// Formulario de login
router.get("/login", usersController.login);

// Perfil del usuario
router.get('profile/:userId', usersController.profile)

// vista del carrito
router.get("/cart", usersController.cart);


module.exports = router;

