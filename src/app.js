const express = require('express');

const path = require ('path');

const app = express();

const mainRouter = require ('./routers/main');
const userRouter = require ('./routers/user');
const productRouter = require ('./routers/product');
const adminRouter = require ('./routers/admin')

app.set('views', path.resolve(__dirname, './views'));

app.set ('view engine', 'ejs');

app.use (express.static('public'));


app.use('/', mainRouter);
app.use('/register', mainRouter);
app.use('/login', mainRouter);
app.use('/carrito', userRouter);
app.use('/product', productRouter);
app.use('/upload', adminRouter);
app.use('/', adminRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Servidor iniciado en el puerto: ' + port);
});
