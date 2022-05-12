const express = require('express');
const app = express();
app.use(express.static('public'));

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/productDetail', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});
app.get('/registro', (req,res)=>{
    res.sendFile(__dirname + '/views/registro.html');
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});
app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/carrito.html');
});