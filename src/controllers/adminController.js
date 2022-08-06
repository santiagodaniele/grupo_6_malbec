const path = require('path')
const fs = require("fs")
const { validationResult } = require('express-validator');
const db = require('../database/models');
const { Op } = require("sequelize");

const Categories = db.Category;
const Subcategories = db.Subcategory;
const Products = db.Product;
const Varieties = db.Variety;

const adminController = {
    index: (req, res) => {
        try {
            Products.findAll()
                // {
                //     include: { association: "category" }
                // })
                .then(bebidas => {
                    res.render('./admin/administrar', { bebidas })
                })
        } catch (error) {
            console.log(error);
        }
    },
    create: (req, res) => {
        let promCategories = Categories.findAll();
        let promSubcategories = Subcategories.findAll();
        let promVarieties = Varieties.findAll();

        Promise
            .all([promCategories, promSubcategories, promVarieties])
            .then(([allCategories, allSubcategories, allVarieties]) => {
                return res.render(path.resolve(__dirname, '..', 'views', 'admin/create'),
                    { allCategories, allSubcategories, allVarieties })
            })
            .catch(error => res.send(error))
    },
    store: function (req, res) {

        const resultValidation = validationResult(req);
        if (!resultValidation.isEmpty()) {
            let promCategories = Categories.findAll();
            let promSubcategories = Subcategories.findAll();
            let promVarieties = Varieties.findAll();
            Promise
                .all([promCategories, promSubcategories, promVarieties])
                .then(([allCategories, allSubcategories, allVarieties]) => {
                    res.render('./admin/create', {
                        errors: resultValidation.mapped(),
                        oldData: req.body,
                        allCategories,
                        allSubcategories,
                        allVarieties

                    })
                })
        }else {
        let image = "default-image.jpg"
        if (req.file) {
            image = req.file.filename;
        };
        Products
            .create(
                {
                    name: req.body.name,
                    brand: req.body.brand,
                    price: req.body.price,
                    description: req.body.description,
                    stock: req.body.stock,
                    discount: req.body.discount,
                    category_id: req.body.category_id,
                    subcategory_id: req.body.subcategory_id,
                    variety_id: req.body.variety_id,
                    image,

                }
            )
            .then(() => {
                return res.redirect('/admin/administrar')
            })
            .catch(error => res.send(error))
        }
    },
    show: (req, res) => {
        db.Product.findByPk(req.params.id,
            {
                include: { association: "category" }

            })
            .then(miBebida => {
                res.render('./admin/detail', { miBebida });
            });
    },
    edit: function (req, res) {
        let productId = req.params.id;
        let promProducts = Products.findByPk(productId, { include: ['category', 'subcategory', 'variety'] });
        let promCategories = Categories.findAll();
        let promSubcategories = Subcategories.findAll();
        let promVarieties = Varieties.findAll();
        Promise
            .all([promProducts, promCategories, promSubcategories, promVarieties])
            .then(([Product, allCategories, allSubcategories, allVarieties]) => {
                return res.render(path.resolve(__dirname, '..', 'views', 'admin/edit'), { Product, allCategories, allSubcategories, allVarieties })
            })
            .catch(error => res.send(error))
    },
    update: function (req, res) {
        let image = req.body.image = req.file ? req.file.filename : req.body.oldImagen;
        let productId = req.params.id;
        Products
            .update(
                {
                    name: req.body.name,
                    brand: req.body.brand,
                    price: req.body.price,
                    description: req.body.description,
                    stock: req.body.stock,
                    discount: req.body.discount,
                    category_id: req.body.category_id,
                    subcategory_id: req.body.subcategory_id,
                    variety_id: req.body.variety_id,
                    image,
                },
                {
                    where: { id: productId }
                })
            .then(() => {
                return res.redirect('/admin/administrar')
            })
            .catch(error => res.send(error))
    },
    destroy: function (req, res) {
        let productId = req.params.id;
        Products
            .destroy({ where: { id: productId }, force: true }) // force: true es para asegurar que se ejecute la acción
            .then(() => {
                return res.redirect('/admin/administrar')
            })
            .catch(error => res.send(error))
    }
}

module.exports = adminController;
