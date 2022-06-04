const path = require('path')
const fs = require ("fs")
const fileProducts = fs.readFileSync(path.resolve("src/data/productDataBase.json"), "utf-8")
const products = JSON.parse(fileProducts)


const productController = {
    product : (req, res) => {
        const product = products.find(element => element.id == req.params.id)
        res.render('./products/product', {product})
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
}

module.exports = productController;