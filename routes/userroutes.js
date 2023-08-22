const express = require('express');
const UserController = require('../controllers/userscontroller');
const router = express.Router();

// For register User
router.post('/register',UserController.register);
// For Login User
router.post('/login', UserController.login);
module.exports = router