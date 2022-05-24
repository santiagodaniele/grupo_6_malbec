const path = require('path')

const productController = {
    product : (req, res) => {
        res.render('product')
    },
    productList : (req, res) => {
        res.render('productList')
    },
}

module.exports = productController;