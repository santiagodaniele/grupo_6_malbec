const path = require('path')

const productController = {
    product : (req, res) => {
        res.render('./products/product')
    },
    productList : (req, res) => {
        res.render('./products/productList')
    },
}

module.exports = productController;