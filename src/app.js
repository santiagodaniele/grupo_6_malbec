
// ************ Require's ************
const express = require('express');
const path = require ('path');
const methodOverride = require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require('express-session');
const cookies = require ('cookie-parser');
const userLoggedMiddleware = require('../src/middlewares/userLoggedMiddleware');
const cors = require ("cors");

//Aquí llamo a la ruta de las api de products
const apiProdcutsRouter = require('./routes/api/productsApiRoutes');
//Aquí llamo a la ruta de las api de categories
const apiCategoriesRouter = require('./routes/api/categoriesAPIRoutes');
//Aquí llamo a la ruta de las api de varieties
const apiVarietiesRouter = require('./routes/api/varietiesAPIRoutes');
//Aquí llamo a la ruta de las api de users
const apiUsersRouter = require('./routes/api/usersApiRoutes');

// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use (express.static('public')); // Necesario para los archivos estáticos en el folder /public
app.use (express.urlencoded({extended:false}));
app.use (express.json());
app.use (methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(session({
	secret: "Esto es un secreto",
	resave: false,
	saveUninitialized: false,
}));
app.use(cookies());
app.use(userLoggedMiddleware);

// ************ Template Engine - (don't touch) ************
app.set('views', path.resolve(__dirname, './views'));
app.set ('view engine', 'ejs');


// ************ Route System require ************
const mainRoutes = require ('./routes/main');
const usersRoutes = require ('./routes/users');
const productRoutes = require ('./routes/product');
const adminRoutes = require ('./routes/admin');

// ************  use Routes() ************
app.use('/', mainRoutes);
app.use('/users', usersRoutes);
app.use('/product', productRoutes);
app.use('/admin', adminRoutes);
app.use(cors());

//Aquí creo la colección de mis recursos de products (APIs)
app.use('/api/products', apiProdcutsRouter);
app.use('/api/categories',apiCategoriesRouter);
app.use('/api/varieties',apiVarietiesRouter);
app.use('/api/users', apiUsersRouter);

// ************ up server ************
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('Servidor iniciado en el puerto: ' + port);
});
