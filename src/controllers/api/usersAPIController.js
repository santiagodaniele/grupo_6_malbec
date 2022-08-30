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
        db.User.findAll({
            include: ['role']
        })
        .then(users => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: users.length,
                    url: 'api/users'
                },
                data: users
            }
                res.json(respuesta);
            })
    },    
    'detail': (req, res) => {
        db.User.findByPk(req.params.id,
            {
                include : ['role']
            })
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