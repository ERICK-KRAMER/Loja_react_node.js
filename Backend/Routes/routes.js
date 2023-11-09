const router = require('express').Router();
const productsControllers = require('../Src/Controllers/productsController');
const usersControllers = require('../Src/Controllers/usersControllers');
const checkEmailExist = require('../Src/Middleweres/middlewereAutenticatin')

// Read data 
router.get('/products',productsControllers.getProducts);
router.get('/users', usersControllers.getUsers);
// Create data
router.post('/products/create', productsControllers.createProducts);
router.post('/users/create', checkEmailExist, usersControllers.createUser);
// Update data
router.put('/products/update/:id', productsControllers.updateProduct);
router.put('/users/update/:id', usersControllers.updateUser);
// Delete data
router.delete('/products/delete/:id', productsControllers.deleteProducts);
router.delete('/users/delete/:id', usersControllers.deleteUser);

module.exports = router;