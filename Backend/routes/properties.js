// import required module
const express = require('express');
const propertyController = require('../controller/propertyController');
const authenticate = require('../middlware/authenticate');

// initiating router
const router = express.Router();

// define routes
// add a new property 
router.post('/property/add',authenticate,propertyController.addProperty);

// update an existing property
router.put('/property/:propertyId',authenticate,propertyController.updateProperties);

// delete a property
router.delete('/property/:propertyId',authenticate,propertyController.deleteProperty);

// get all properties (self-listed)
router.get('/properties/getall',authenticate,propertyController.getAllProperties);

module.exports = router;