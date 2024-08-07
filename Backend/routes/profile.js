// import required modules
const express = require('express');

const profileController = require('../controller/profileController');

const authenticate = require('../middleware/authenticate');


// initiate aa router

const router = express.Router();

// get profile
router.get('/profile',authenticate,profileController.getProfile);

// to updte the profile
router.put('/profile/update',authenticate,profileController.updateProfile);

// to delete the profile
router.delete('/profile/delete',authenticate,profileController.deleteProfile);

module.exports = router;