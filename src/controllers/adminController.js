const path = require('path')

const adminController = {
    upload : (req, res) => {
        res.render('./products/upload')
    },
    edit : (req, res) => {
        res.render('./products/edit')
    },
}

module.exports = adminController;