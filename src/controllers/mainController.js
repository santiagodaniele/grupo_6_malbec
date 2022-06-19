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
    }    
    }

module.exports = mainController;