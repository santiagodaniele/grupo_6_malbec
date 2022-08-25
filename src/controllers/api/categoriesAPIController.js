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

//---------------------------
//Dentro del actorsAPIController uso las dos forma de poder llamar a nuestros modelo
//----------------------------------
const categoriesAPIController = {
    'list': (req, res) => {
        db.Category.findAll()
        .then(categories => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: categories.length,
                    url: 'api/categories'
                },
                data: categories
            }
                res.json(respuesta);
            })
    }
}

module.exports = categoriesAPIController;