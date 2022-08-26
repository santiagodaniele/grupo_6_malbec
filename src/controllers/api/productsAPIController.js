const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Categories = db.Category;
const Subcategories = db.Subcategory;
const Products = db.Product;
const Varieties = db.Variety;


const productsAPIController = {
    'list': (req, res) => {
        db.Product.findAll({
            include: ['category']
        })
            .then(products => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: products.length,
                        url: 'api/products'
                    },
                    data: products
                }
                res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.Product.findOne({
            order: [['id', 'DESC']],
            include: ['category', "variety"],
        })
            .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: product.length,
                        url: '/api/products/detail'
                    },
                    data: product
                }
                res.json(respuesta);
            });
    },
}

module.exports = productsAPIController;