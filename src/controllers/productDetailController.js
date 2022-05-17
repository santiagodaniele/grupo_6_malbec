const path = require('path')

const controlador = {
    index : (req, res) => {
        res.sendFile(path.resolve('src/views/productDetail.html'))
    },
    // carrito : (req, res) => {
    //     res.sendFile(path.resolve('src/views/carrito.html'))
    // },
    // login : (req, res) => {
    //     res.sendFile(path.resolve('src/views/login.html'))
    // },
    // productDetail : (req, res) => {
    //     res.sendFile(path.resolve('src/views/productDetail.html'))
    // },
    // registro : (req, res) => {
    //     res.sendFile(path.resolve('src/views/registro.html'))
    // },
}

module.exports = controlador;