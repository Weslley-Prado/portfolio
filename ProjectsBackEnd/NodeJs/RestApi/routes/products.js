const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).send ({
        message: 'Another routes'
    } );
});

router.post('/', (req, res, next)=>{
    res.status(201).send({
        message:'Usando post'
    });
});

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


module.exports = router;