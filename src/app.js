const express = require('express');

const path = require ('path');

const methodOverride = require('method-override')

const app = express();

const mainRouter = require ('./routers/main');
const userRouter = require ('./routers/user');
const productRouter = require ('./routers/product');
const adminRouter = require ('./routers/admin');

app.set('views', path.resolve(__dirname, './views'));

app.set ('view engine', 'ejs');

app.use (express.static('public'));

app.use (methodOverride("_method"));

app.use (express.urlencoded({extended:false}));

app.use (express.json());


app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/admin', adminRouter);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Servidor iniciado en el puerto: ' + port);
});
