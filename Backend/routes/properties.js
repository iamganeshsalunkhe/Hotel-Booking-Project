// import required module
const express = require('express');
const propertyController = require('../controller/propertyController');
const authenticate = require('../middleware/authenticate');
const upload = require('../middleware/multerConfig');

// initiating router
const router = express.Router();

// define routes
// add a new property 
router.post('/property/add',authenticate,upload.single('image'),propertyController.addProperty);

// update an existing property
router.put('/property/:propertyId',authenticate,
    upload.single('image'),propertyController.updateProperties);

// delete a property
router.delete('/property/:propertyId',authenticate,propertyController.deleteProperty);

// get all properties (self-listed)
router.get('/properties/getall',authenticate,propertyController.getAllProperties);

// link amenities with properties
router.post('/:propertyId/linkamenities',authenticate,propertyController.linkamenities);

module.exports = router;