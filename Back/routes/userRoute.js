const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userMiddleware = require('../middlewares/userMiddleware');

//Get user by ID
router.get('/:id', userController.getUserById);

// GET all users
router.get('/', userController.getUser);

// POST a new user
router.post('/', userController.createUser);

//Delete user by ID
router.delete('/:id', userController.deleteUser);

//Update user by ID
router.put('/:id', userController.updateUser);


//Rutas protegidas con userMiddleware
router.get('/protected', userMiddleware, userController.protectedRoute);


module.exports = router;