// import the  required module
const express =require('express');
const amenityController = require('../controller/amenitiesController');
const authenticate = require('../middlware/authenticate');

// initiate router
const router = express.Router();

router.get('/',authenticate,amenityController.getAllamenities);


module.exports = router;