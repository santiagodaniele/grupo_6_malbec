const path = require('path')

const controlador = {
    cart : (req, res) => {
        res.render('./users/cart')
    },
}

module.exports = controlador;