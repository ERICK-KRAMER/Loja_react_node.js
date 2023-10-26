const router = require('express').Router();
const homeController = require('../Src/Controllers/homeController')

// Read data 
router.get('/', homeController.read);

// Read data with ID
router.get('/:id', homeController.readId);

// Create data
router.post('/create', homeController.create);

// Update data
router.put('/update/:id', homeController.update);

// Delete data
router.delete('/delete/:id', homeController.delete)

module.exports = router;