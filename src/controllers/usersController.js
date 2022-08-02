const path = require('path')
const { validationResult } = require('express-validator');
const fs = require("fs")
const bcrypt = require('bcrypt');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { update } = require('./adminController');

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
    userList: (req, res) => {
        try {
            Users.findAll()
                .then(usuarios => {
                    res.render('./users/userList', { usuarios })
                })
        } catch (error) {
            console.log(error);
        }
    },
    show: (req, res) => {
        db.User.findByPk(req.params.id,
            {
                include: { association: "role" }

            })
            .then(miUser => {
                res.render('./users/userDetail', { miUser });
            });
    },
    edit: function (req, res) {
        db.User.findByPk(req.params.id)
            .then(User => {
                res.render('./users/userEdit', { User });
            })
            .catch(error => res.send(error));


    },
    update: function (req, res) {
        let image = req.body.image = req.file ? req.file.filename : req.body.oldImagen;
        let UserId = req.params.id;
        Users
            .update(
                {
                    first_name: req.body.firstname,
                    last_name: req.body.lastname,
                    email: req.body.email,
                    image,
                },
                {
                    where: { id: UserId }
                })
            .then(() => {
                return res.redirect('/users/userList')
            })
            .catch(error => res.send(error))
    },
    destroy: function (req, res) {
        let userId = req.params.id;
        Users
            .destroy({ where: { id: userId }, force: true }) // force: true es para asegurar que se ejecute la acción
            .then(() => {
                return res.redirect('/users/userList')
            })
            .catch(error => res.send(error))
    },

    cart: (req, res) => {
        res.render('./users/cart')
    }
}

module.exports = controlador;