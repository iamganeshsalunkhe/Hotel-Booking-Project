// import required modules
const express = require('express');
const locationsController = require('../controller/locationController');

//initiate router
const router = express.Router();

// define route
router.get('/locations',locationsController.getLocation);


module.exports = router;