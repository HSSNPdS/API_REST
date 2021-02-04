const express = require('express');
const router = express.Router();

// RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de pedidos'
    });
});

// INSERE UM PEDIDO
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota de pedidos'
    });
});

// RETORNA O PEDIDO IDENTIFICADO POR ID
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
    
    if (id === 'especial'){
        res.status(200).send({
            mensagem: 'Você descobriu o ID especial',
            id: id
        });
    }else {
        res.status(200).send({
            mensagem: 'Você passou um ID',
            id: id
        });
    }
});

// ALTERA UM PEDIDO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o PATCH dentro da rota de pedido'
    })
});

// DELETA UM PEDIDO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota de pedido'
    })
});

module.exports = router;