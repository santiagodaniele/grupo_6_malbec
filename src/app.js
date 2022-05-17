const express = require('express');

const mainRouter = require ('./routers/main');
const loginRouter = require ('./routers/login');
const carritoRouter = require ('./routers/carrito');
const registroRouter = require ('./routers/registro');
const productDetailRouter = require ('./routers/productDetail');

const app = express();

app.use (express.static('public'));

app.use('/', mainRouter);
app.use('/login', loginRouter);
app.use('/carrito', carritoRouter);
app.use('/registro', registroRouter);
app.use('/productDetail', productDetailRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Servidor iniciado en el puerto: ' + port);
});
