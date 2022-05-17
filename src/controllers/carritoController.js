const path = require('path')

const controlador = {
    index : (req, res) => {
        res.sendFile(path.resolve('src/views/carrito.html'))
    },
}

module.exports = controlador;