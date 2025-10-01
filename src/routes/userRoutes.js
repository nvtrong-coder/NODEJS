const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET danh sách user
router.get('/', userController.listUsers);

// GET form thêm user
router.get('/add', userController.addUserForm);

// POST thêm user
router.post('/add', userController.saveUser);

module.exports = router;
