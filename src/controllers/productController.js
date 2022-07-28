const path = require('path')
const fs = require("fs")
// const fileProducts = fs.readFileSync(path.resolve("src/data/productDataBase.json"), "utf-8")
// const products = JSON.parse(fileProducts)
const db = require('../database/models');
const { Op } = require("sequelize");

const Categories = db.Category;
const Subcategories = db.subCategory;
const Products = db.Product;
const Varietys = db.Variety;


const productController = {
    productDetail: (req, res) => {
        try {
            Products.findByPk(req.params.id,
                {
                    include: { association: "category" }
                })
                .then(products => {
                    res.render('./products/productDetail', { products })
                })
        } catch (error) {
            console.log(error);
        }
    },
    productList: async (req, res) => {
        try {
            const vinosBlancos = await Products.findAll({
                where: {
                    category_id: "1"
                },
                // include: { association: "products" }
            });
            const vinosTintos = await Products.findAll({
                where: {
                    category_id: "2"
                },
                // include: { association: "products" }
            });
            const cervezas = await Products.findAll({
                where: {
                    category_id: "3"
                },
                // include: { association: "products" }
            });
            const spirits = await Products.findAll({
                where: {
                    category_id: "4"
                },
                // include: { association: "products" }
            });
            const data = {
                vinosBlancos,
                vinosTintos,
                cervezas,
                spirits
            }
            res.render('./products/productList', { products: data })

        } catch (error) {
            console.log(error);

        }
    },
    vinos: async (req, res) => {
        try {
            const vinosBlancos = await Products.findAll({
                where: {
                    category_id: "1"}
                });
            const vinosTintos = await Products.findAll({
                where: {
                    category_id: "2"}
            })
                const data = {
                    vinosBlancos,
                    vinosTintos                    
                }
            res.render('./products/vinos', { data })
                
        } catch (error) {
            console.log(error);
        }
        // const vinos = {
        //     vinosBlancos: products.filter(element => element.category === "vinos-blancos"),
        //     vinosTintos: products.filter(element => element.category === "vinos-tintos"),
        // }
        // res.render('./products/vinos', { products: vinos })
    },
    cervezas: async (req, res) => {
            try {
                const cervezas = await Products.findAll({
                    where: {
                        category_id: "3"}
                    });
                const data = {
                        cervezas: cervezas,                   
                    }
                res.render('./products/cervezas', { data })
                    
            } catch (error) {
                console.log(error);
            }
        },
    spirits:  async (req, res) => {
        try {
            const spirits = await Products.findAll({
                where: {
                    category_id: "4"}
                });
            const data = {
                    spirits,                   
                }
            res.render('./products/spirits', { data })
                
        } catch (error) {
            console.log(error);
        }
    },
}

module.exports = productController;