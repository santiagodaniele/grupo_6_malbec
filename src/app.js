// ************ Require's ************
const express = require('express');
const path = require ('path');
const methodOverride = require('method-override') // Pasar poder usar los métodos PUT y DELETE

// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use (express.static('public')); // Necesario para los archivos estáticos en el folder /public
app.use (express.urlencoded({extended:false}));
app.use (express.json());
app.use (methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

// ************ Template Engine - (don't touch) ************
app.set('views', path.resolve(__dirname, './views'));
app.set ('view engine', 'ejs');

// ************ Route System require and use() ************
const mainRouter = require ('./routers/main');
const userRouter = require ('./routers/user');
const productRouter = require ('./routers/product');
const adminRouter = require ('./routers/admin');

app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/admin', adminRouter);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Servidor iniciado en el puerto: ' + port);
});
