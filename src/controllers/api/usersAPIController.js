const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Users = db.User;
const Roles = db.Role;


const productsAPIController = {
    'list': (req, res) => {
        db.User.findAll({ atributes: { include: ['role'], exclude: ["password"] } })
            .then(users => {
                const usersData = users.map(user => ({
                    ...user.dataValues,
                    detail: "/api/users/" + user.id
                }
                ))
                let respuesta = {
                    meta: {
                        status: 200,
                        total: users.length,
                        url: 'api/users'
                    },
                    data: usersData
                }
                res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.User.findByPk(req.params.id, { atributes: { exclude: ["password"] } })
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: '/api/users/:id'
                    },
                    data: user
                }
                res.json(respuesta);
            });
    },

}

module.exports = productsAPIController;