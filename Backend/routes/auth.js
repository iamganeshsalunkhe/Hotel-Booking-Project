// import required modules
const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');


// define routes for signin and login
router.post('/signup',authController.signup);

router.post('/login',authController.login);


router.post('/logout',authController.logout);

module.exports = router;