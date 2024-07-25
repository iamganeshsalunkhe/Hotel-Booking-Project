// import required modules
const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const authenticate = require('../middlware/authenticate');

// define routes for signup and login
router.post('/signup',authController.signup);

router.post('/login',authController.login);


// for checking user is LoggedIn or not
router.get('/check-token',authenticate,authController.checkUser);

// for logout
router.post('/logout',authenticate,authController.logout);

module.exports = router;