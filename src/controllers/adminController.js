const path = require('path')

const adminController = {
    create : (req, res) => {
        res.render('./products/create')
    },
    edit : (req, res) => {
        res.render('./products/edit')
    },
}

module.exports = adminController;