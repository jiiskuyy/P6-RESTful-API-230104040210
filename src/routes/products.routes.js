const express = require('express');
const router = express.Router();
const products = require('../data/products.data');
const validateProduct = require('../middlewares/validateProduct');

// 1. GET All Products
router.get('/', (req, res) => {
    res.json({ success: true, data: products });
});

// 2. GET Product by ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.json({ success: true, data: product });
});

// 3. POST New Product (Wajib pakai middleware validateProduct)
router.post('/', validateProduct, (req, res) => {
    const { name, price, stock } = req.body;
    const newProduct = {
        id: Date.now(),
        name,
        price,
        stock: stock || 0 // Default stock 0 jika tidak diisi
    };

    products.push(newProduct);
    res.status(201).json({ success: true, message: 'Product created', data: newProduct });
});

// 4. PUT Update Product (Full Update, wajib validateProduct)
router.put('/:id', validateProduct, (req, res) => {
    const id = parseInt(req.params.id);
    const { name, price, stock } = req.body;
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }

    products[index] = { id, name, price, stock: stock || products[index].stock };
    
    res.json({ success: true, message: 'Product updated', data: products[index] });
});

// 5. PATCH Partial Update
router.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const { name, price, stock } = req.body;

    if (name !== undefined) product.name = name;
    if (price !== undefined) product.price = price;
    if (stock !== undefined) product.stock = stock;

    res.json({ success: true, message: 'Product partially updated', data: product });
});

// 6. DELETE Product
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }

    products.splice(index, 1);
    res.json({ success: true, message: 'Product deleted' });
});

// 7. Error Simulation Route (Untuk test errorHandler)
router.get('/crash/test', (req, res, next) => {
    const err = new Error('Tes error sengaja');
    next(err);
});

module.exports = router;