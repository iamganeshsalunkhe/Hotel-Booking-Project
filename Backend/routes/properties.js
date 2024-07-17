// import required module
const express = require('express');
const propertyController = require('../controller/propertyController');
const authenticate = require('../middlware/authenticate');

// initiating router
const router = express.Router();

// define routes
// add a new property 
router.post('/properties',authenticate,propertyController.addProperty);

// update an existing property
router.put('/properties/:propertyId',authenticate,propertyController.updateProperties);

module.exports = router;