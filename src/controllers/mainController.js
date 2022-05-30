const path = require('path')

const mainController = {
    main : (req, res) => {
        res.render('./products/main')
    },
    login : (req, res) => {
            res.render('./users/login')
    },
    register : (req, res) => {
        res.render('./users/register')
    },
    }

module.exports = mainController;