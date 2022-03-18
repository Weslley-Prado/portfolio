const express = require('express');
const router = express.Router();

//Return all products
router.get('/', (req, res, next)=>{
    res.status(200).send ({
        message: 'Another routes'
    } );
});

//Insert a product
router.post('/', (req, res, next)=>{
    res.status(201).send({
        message:'Usando post'
    });
});
//Return the datas of a product
router.get('/:id_product', (req, res, next)=>{
    const id = req.params.id_product
    if(id === 'especial'){
        res.status(200).send ({
            message: 'Special Id'
        } );
    } else{
        res.status(200).send ({
            message: 'Any Id'
        } );
    }
    
});
//Update a product
router.patch('/', (req, res, next)=>{
    res.status(201).send({
        message:'Usando Patch'
    });
});
// Delete product
router.delete('/', (req, res, next)=>{
    res.status(201).send({
        message:'Usando delete'
    });
});


module.exports = router;