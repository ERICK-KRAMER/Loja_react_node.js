const router = require('express').Router();
const homeController = require('../Src/Controllers/homeController');
const productsControllers = require('../Src/Controllers/productsController')

// Read data 
router.get('/', homeController.read);
router.get('/products',productsControllers.getProducts )

// Read data with ID
router.get('/:id', homeController.readId);

// Create data
router.post('/create', homeController.create);
router.post('/products/create', productsControllers.createProducts)

// Update data
router.put('/update/:id', homeController.update);
router.put('/products/update/:id', productsControllers.updateProduct)
// Delete data
router.delete('/delete/:id', homeController.delete);
router.delete('/delete/product/:id', productsControllers.deleteProducts)

module.exports = router;