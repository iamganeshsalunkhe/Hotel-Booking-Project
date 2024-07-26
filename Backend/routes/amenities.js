// import the  required module
const express =require('express');
const amenityController = require('../controller/amenitiesController');
const authenticate = require('../middleware/authenticate');

// initiate router
const router = express.Router();

// to get all amenities
router.get('/amenities',authenticate,amenityController.getAllamenities);

// to add a new amenity
router.post('/amenities',authenticate,amenityController.createAmenity);

router.put('/amenities/:amenityId',authenticate,amenityController.updateAmenity);

router.delete('/amenities/:amenityId',authenticate,amenityController.deleteAmenity);

module.exports = router;