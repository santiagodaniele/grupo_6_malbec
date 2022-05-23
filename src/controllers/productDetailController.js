const path = require('path')

const controlador = {
    product : (req, res) => {
        res.render('productDetail')
    },
}

module.exports = controlador;