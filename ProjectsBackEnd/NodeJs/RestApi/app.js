const express = require('express')
const app = express();

const routesProducts = require('./routes/products');
const rotaPedidos = require('./routes/pedidos');


app.use('/products', routesProducts);
app.use('/pedidos', rotaPedidos);

app.use('/teste', (req, res, next) =>{
    res.status(200).send({
        message:`All right`
    })
})

module.exports = app;