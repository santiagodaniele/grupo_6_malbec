const path = require('path')
const fs = require ("fs")
const fileProducts = fs.readFileSync(path.resolve("src/data/productDataBase.json"), "utf-8")
const products = JSON.parse(fileProducts)

const adminController = {
    create : (req, res) => {
        res.render('./products/create')
    },
    store: (req, res) => {
        console.log(req.body)
        let image = "default-image.jpg"
        if(req.file){
            image = req.file.filename; //el filename viene de product.js del callback de la linea 11//
        }
        //armar el objeto que va a la base de datos//
        const newProduct = {
            id: products[products.length-1].id + 1, //-1 para traer el tamaño del array -1 para traer la cantidad real de elemnetos, no de indices//
            ...req.body,
            price: parseInt(req.body.price), // el parseInt se usa para pasar el string a entero 
            discount: parseInt(req.body.discount),
            anio: parseInt(req.body.anio),
            stock: parseInt(req.body.stock),
            image
        };
        products.push(newProduct); //agrego el nuevo elemento al array//
        fs.writeFileSync(path.resolve("src/data/productDataBase.json"), JSON.stringify(products, null, " "));
        res.redirect("/product/list");//me redirige como pide el ejercicio, a la ruta /productos
        },//("/product/" + newProduct.id) esto seria si quiero ir al detalle

    edit : (req, res) => {
        res.render('./products/edit')
    },
}

module.exports = adminController;
