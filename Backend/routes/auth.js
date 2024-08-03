// import required modules
const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const authenticate = require('../middleware/authenticate');

// define routes for signup and login
// for signup
router.post('/signup',authController.signup);

// for login
router.post('/login',authController.login);

// for forgot-password
router.post('/forgot-password',authController.forgotPassword);

// for checking user is LoggedIn or not
router.get('/check-token',authenticate,authController.checkUser);

// for logout
router.post('/logout',authenticate,authController.logout);

module.exports = router;