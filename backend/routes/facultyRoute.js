const express = require('express');
const userController = require('../controllers/userController');
const facultyController = require('../controllers/facultyController');

const router = express.Router();


router.post('/Login', facultyController.loginuser);

router.post('/register', facultyController.registerUser);
module.exports = router;