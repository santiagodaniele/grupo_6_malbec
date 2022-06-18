const path = require('path')
const fs = require ("fs")
const fileMain = fs.readFileSync(path.resolve("src/data/productDataBase.json"), "utf-8")
const productsMain = JSON.parse(fileMain)

const mainController = {
    main : (req, res) => {
        const data = {
        destacados: productsMain.filter(element => element.subCategory === "destacados")
    }
        res.render('main', {productsMain:data})
    },
    contact : (req, res) => {
        res.render('contact')
    },
    aboutUs : (req, res) => {
        res.render('aboutUs')
    },
    faq : (req, res) => {
        res.render('faq')
    }             
    }

module.exports = mainController;