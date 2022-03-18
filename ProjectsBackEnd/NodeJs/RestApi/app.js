const express = require('express')
const app = express();

const routesProducts = require('./routes/products');

app.use('/products', routesProducts);

app.use('/teste', (req, res, next) =>{
    res.status(200).send({
        message:`All right`
    })
})

module.exports = app;