const path = require('path')
const fs = require ("fs")
const fileProducts = fs.readFileSync(path.resolve("src/data/productDataBase.json"), "utf-8")
const products = JSON.parse(fileProducts)


const productController = {
    productDetail : (req, res) => {
        const product = products.find(element => element.id == req.params.id)
        res.render('./products/productDetail', {product})
    }, 
    productList : (req, res) => {
        const data = {
           vinosBlancos: products.filter(element => element.category === "vinos-blancos"),
           vinosTintos: products.filter(element => element.category === "vinos-tintos"),
           cervezas: products.filter(element => element.category === "cervezas"),
           spirits: products.filter(element => element.category === "spirits") 
        }
        res.render('./products/productList', {products:data})
    },
    vinos : (req, res) => {
        const vinos = {
            vinosBlancos: products.filter(element => element.category === "vinos-blancos"),
            vinosTintos: products.filter(element => element.category === "vinos-tintos"),
        }
        res.render('./products/vinos', {products:vinos})
    },
        cervezas : (req, res) => {
        const cervezas = {
        cervezas: products.filter(element => element.category === "cervezas"),
        }
        res.render('./products/cervezas', {products:cervezas})
    },
        spirits : (req, res) => {
        const spirits = {
        spirits: products.filter(element => element.category === "spirits") 
        }
        res.render('./products/spirits', {products:spirits})
    },
}

module.exports = productController;