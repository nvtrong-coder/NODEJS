const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// JSON API
router.get('/api', userController.listUsers);
router.post('/api', userController.createUser);

// View pages
router.get('/', userController.listUsersPage);
router.get('/add', userController.addUserPage);
router.post('/add', userController.createUser);

module.exports = router;
