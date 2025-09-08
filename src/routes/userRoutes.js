
const express = require('express')
const router = express.Router();
const userController = require('../controller/userController');

//rota para obter todos os usuarios
router.get('/', userController.getAllUsers);

//rota para obter um usuario por id
router.get('/:id', userController.getUserById);

//rota para criar um novo usuario
router.post('/', userController.createUser);

module.exports = router;