const path = require('path')
const { validationResult } = require ('express-validator');
const fs = require ("fs")
const bcrypt = require('bcrypt');
const fileUsers = fs.readFileSync(path.resolve("src/data/users.json"), "utf-8")
const users = JSON.parse(fileUsers)
const User = require('../models/User');

const controlador = {
register : (req, res) => {
    res.render('./users/register')
},
processRegister : (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
        res.render('./users/register', {
            errors: resultValidation.mapped(),
            oldData: req.body
        })
    } 
    let userInDB = User.findByField('email', req.body.email);
    if(userInDB){
    return res.render('./users/register', {
            errors:{ 
                email: {
                    msg: 'Este mail ya está registrado'
                }
            },
            oldData: req.body
        });
    }

    let userToCreate = {
        ...req.body,
        password: bcrypt.hashSync(req.body.password, 10),
        avatar: req.file.filename
    }
    
    let userCreated = User.create(userToCreate);

    res.redirect('./login');   
    
},
login : (req, res) => {
    res.render('./users/login')
},
processLogin : (req, res) => {
let userToLogin = User.findByField('email', req.body.email);
if(userToLogin){
    let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.password)
    if(isOkThePassword) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;
        if(req.body.remember_user){
            res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2})
        }
        return res.redirect('/users/profile');
    }

}
return res.render('./users/login', {
    errors: {
        email: {
            msg: 'Las credenciales son inválidas'

        }
    }
})                     

},
profile : (req, res) => {   
    console.log(req.cookies.userEmail); 
    res.render('./users/profile', {
        user: req.session.userLogged
    });
},
logout: (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    res.redirect('/');
},
    cart : (req, res) => {
        res.render('./users/cart')
    }
}

module.exports = controlador;