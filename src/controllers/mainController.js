const path = require('path')

const mainController = {
    main : (req, res) => {
        res.render('main')
    },
    login : (req, res) => {
            res.render('login')
    },
    register : (req, res) => {
        res.render('register')
    },
    }

module.exports = mainController;