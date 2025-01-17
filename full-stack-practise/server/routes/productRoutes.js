const express = require('express');
const router = express.Router();
const ProductModel = require('../models/productModels');
const { getAll, getById, post, editWithPut, deleteById } = require('../controllers/productControllers');

router.get('/', getAll);

router.get('/:id', getById);

router.post('/', post);

router.put('/:id', editWithPut);

router.delete('/:id', deleteById);

module.exports = router;