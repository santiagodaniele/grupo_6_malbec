const path = require('path')
const { validationResult } = require ('express-validator');
const fs = require ("fs")
const bcrypt = require('bcrypt');
const fileUsers = fs.readFileSync(path.resolve("src/data/users.json"), "utf-8")
const users = JSON.parse(fileUsers)

const controlador = {
register : (req, res) => {
    res.render('./users/register')
},
store : (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
        res.render('./users/register', {
            errors: resultValidation.mapped(),
            oldData: req.body
        })
        res.send(resultValidation);

    } else {
        let avatar = req.file.filename;
        const newUser = {
            id: users[users.length-1].id + 1, //-1 para traer el tamaño del array -1 para traer la cantidad real de elemnetos, no de indices//
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            category: 'usuario',
            avatar
    };
    users.push(newUser); //agrego el nuevo elemento al array//
        fs.writeFileSync(path.resolve("src/data/users.json"), JSON.stringify(users, null, " "));
        res.redirect('./login');
        }     
    
},
login : (req, res) => {
    res.render('./users/login')
},
profile : (req, res) => {
    res.render('./users/profile')
},
    cart : (req, res) => {
        res.render('./users/cart')
    },
}

module.exports = controlador;