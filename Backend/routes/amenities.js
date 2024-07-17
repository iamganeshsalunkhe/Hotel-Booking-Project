// import the  required module
const express =require('express');
const amenityController = require('../controller/amenitiesController');
const authenticate = require('../middlware/authenticate');

// initiate router
const router = express.Router();

// to get all amenities
router.get('/amenities',authenticate,amenityController.getAllamenities);

// to add a new amenity
router.post('/amenities',authenticate,amenityController.createAmenity);



module.exports = router;