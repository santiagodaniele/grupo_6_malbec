const path = require('path')

const adminController = {
    upload : (req, res) => {
        res.render('upload')
    },
    edit : (req, res) => {
        res.render('edit')
    },
}

module.exports = adminController;