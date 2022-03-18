const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        message: 'Another routes'
    });
});

//Insert 
router.post('/', (req, res, next) => {
    res.status(201).send({
        message: 'Usando post'
    });
});

router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido

    res.status(200).send({
        message: 'Detalhes do pedido',
        id_pedido: id
    });

});
//Update 
router.patch('/', (req, res, next) => {
    res.status(201).send({
        message: 'Usando Patch'
    });
});
// Delete 
router.delete('/', (req, res, next) => {
    res.status(201).send({
        message: 'Usando delete'
    });
});


module.exports = router;