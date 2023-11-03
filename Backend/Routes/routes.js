const router = require('express').Router();
const productsControllers = require('../Src/Controllers/productsController')

// Read data 
router.get('/products',productsControllers.getProducts)

// Create data
router.post('/products/create', productsControllers.createProducts)

// Update data
router.put('/products/update/:id', productsControllers.updateProduct)

// Delete data
router.delete('/products/delete/:id', productsControllers.deleteProducts)

module.exports = router;