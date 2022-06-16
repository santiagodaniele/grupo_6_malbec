const path = require('path')
const fs = require ("fs")
const fileProducts = fs.readFileSync(path.resolve("src/data/productDataBase.json"), "utf-8")
const products = JSON.parse(fileProducts)

const adminController = {
    index: (req,res) => {
        let bebidas = products;
        res.render('./admin/administrar', {bebidas})
    },
    create : (req, res) => {
        res.render('./admin/create')
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
        res.redirect("/product/list");
        },
        show: (req,res) =>{
            let miBebida;
            products.forEach(bebida => {
                if(bebida.id == req.params.id){
                    miBebida = bebida;
                }
                
            });
            res.render('./admin/detail', {miBebida})
        },

    edit : (req, res) => {
        const modoId = req.params.id;
        let bebidaEditar = products.find(bebida => bebida.id == modoId);
        res.render('./admin/edit', {bebidaEditar});
    },
    update: (req,res) =>{
        req.body.id = req.params.id;
        req.body.image = req.file ? req.file.filename : req.body.oldImagen;
        let bebidasUpdate = products.map(bebida =>{
            if(bebida.id == req.body.id){
                return bebida = req.body;
            }
            return bebida;
        })
        let bebidaActualizar = JSON.stringify(bebidasUpdate,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../data/productDataBase.json'),bebidaActualizar);
        res.redirect('/admin/administrar');

},
destroy: (req,res) =>{
    const bebidaDeleteId = req.params.id;
    const bebidasFinal = products.filter(bebida => bebida.id != bebidaDeleteId);
    let bebidasGuardar = JSON.stringify(bebidasFinal,null,2)
    fs.writeFileSync(path.resolve(__dirname, '../data/productDataBase.json'),bebidasGuardar);
    res.redirect('/admin/administrar');

}
}

module.exports = adminController;
