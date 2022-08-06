const path = require('path');
const { check } = require('express-validator');
// const db = require('../database/models');
// const Users = db.User;
// const Roles = db.Role;

module.exports = [
    check('name').notEmpty().withMessage('Ingrese el nombre del producto'),
    check('brand').notEmpty().withMessage('Ingrese la marca del producto'),
    check('price').notEmpty().withMessage('Ingrese un precio'),
    check('description').notEmpty().withMessage('Ingrese la descripción del producto'),
	check('stock').notEmpty().withMessage('Ingrese el stock del producto'),
	check('discount').notEmpty().withMessage('Ingrese el descuento del producto'),
    check('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]