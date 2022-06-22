const path = require('path');
const { body, check } = require('express-validator');

module.exports = [
    body('firstname').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('lastname').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('email')
    .notEmpty().withMessage('Ingrese un email').bail()
    .isEmail().withMessage('Ingrese un correo válido'),
    body('password').notEmpty().withMessage('Elige una constraseña'),
    body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];

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