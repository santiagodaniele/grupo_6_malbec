const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

//Rutas
//Listado de productos
router.get('/', productsAPIController.list);
//Detalle de un producto
router.get('/detail', productsAPIController.detail);
//Ranking de productos
router.get('/ranking', productsAPIController.ranking);

module.exports = router;