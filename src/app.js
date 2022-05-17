const express = require('express');

const mainRouter = require ('./routers/main');

const app = express();

app.use (express.static('public'));

app.use('/', mainRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Servidor iniciado en el puerto: ' + port);
});
