const express = require('express');


const router = express.Router();

const {getProductById,getAllProducts,addProduct} = require('../controller/productController');

router.get('/allProducts',getAllProducts);
router.get('/addProduct',addProduct);
router.get('/:id',getProductById);



module.exports =router;