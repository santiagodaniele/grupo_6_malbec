const path = require('path')
const fs = require("fs")
const db = require('../database/models');
const { Op } = require("sequelize");

const Categories = db.Category;
const Subcategories = db.subCategory;
const productsMain = db.Product;
const Varietys = db.Variety;



const mainController = {
    main: (req, res) => {
        productsMain.findAll({
            where: {
                subcategory_id: "1"
            }
        }).then(data => {
            res.render('main', { productsMain: data })
        }).catch(err=>console.log(err))
    },
    contact: (req, res) => {
        res.render('contact')
    },
    aboutUs: (req, res) => {
        res.render('aboutUs')
    },
    faq: (req, res) => {
        res.render('faq')
    }
}

module.exports = mainController;