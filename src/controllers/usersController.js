const path = require('path')
const { validationResult } = require('express-validator');
const fs = require("fs")
const bcrypt = require('bcrypt');
// const fileUsers = fs.readFileSync(path.resolve("src/data/users.json"), "utf-8")
// const users = JSON.parse(fileUsers)
// const User = require('../models/User');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Users = db.User;
const Roles = db.Role;


const controlador = {
    register: (req, res) => {
        res.render('./users/register')
    },
    create: async (req, res) => {
        const resultValidation = validationResult(req);
        if (!resultValidation.isEmpty()) {
            res.render('./users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }

        // let userInDB = Users.findOne({where:{email: req.body.email}});
        // if (userInDB) {
        //     return res.render('./users/register', {
        //         errors: {
        //             email: {
        //                 msg: 'Este mail ya está registrado'
        //             }
        //         },
        //         oldData: req.body
        //     });
        // }
        const newUser = {
            first_name: req.body.firstname,
            last_name: req.body.lastname,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            image: req.file.filename,
            rol_id: 1

        };
        Users.create(newUser)
            .then((userCreated) => {
                res.redirect('./login');
            })
            .catch(error => res.send(error))
    },
    login: (req, res) => {
        res.render('./users/login')
    },
    processLogin: async (req, res) => {
        try {
            let userToLogin = await Users.findOne({ where: { email: req.body.email } });
            if (userToLogin) {
                let isOkThePassword = bcrypt.compare(req.body.password, userToLogin.password)
                if (isOkThePassword) {
                    if (userToLogin.rol_id == 2) {
                        delete userToLogin.password;
                        req.session.adminLogged = userToLogin;
                        res.locals.adminLogged = true;
                    }
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;
                    if (req.body.remember_user) {
                        res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })
                    }
                    return res.redirect('/users/profile');
                }
                return res.render('./users/login', {
                    errors: {
                        email: {
                            msg: 'Las credenciales son inválidas'

                        }
                    }
                })
            }
        } catch (error) {

            console.log(error)
        }
    },
    profile: (req, res) => {
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
    cart: (req, res) => {
        res.render('./users/cart')
    }
}

module.exports = controlador;