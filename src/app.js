const express = require('express');

const path = require ('path');

const app = express();

const mainRouter = require ('./routers/main');
const loginRouter = require ('./routers/login');
const carritoRouter = require ('./routers/carrito');
const registroRouter = require ('./routers/registro');
const productDetailRouter = require ('./routers/productDetail');

app.set('views', path.resolve(__dirname, './views'));

app.set ('view engine', 'ejs');

app.use (express.static('public'));

app.use('/registro', registroRouter);
app.use('/', mainRouter);
app.use('/login', loginRouter);
app.use('/carrito', carritoRouter);
app.use('/productDetail', productDetailRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Servidor iniciado en el puerto: ' + port);
});
