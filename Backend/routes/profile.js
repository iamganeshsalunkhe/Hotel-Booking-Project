// import required modules
const express = require('express');

const profileController = require('../controller/profileController');

const authenticate = require('../middlware/authenticate');


// initiate aa router

const router = express.Router();

// get profile
router.get('/profile',authenticate,profileController.getProfile);

module.exports = router;