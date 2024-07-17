// import required module
const express = require('express');
const propertyController = require('../controller/propertyController');
const authenticate = require('../middlware/authenticate');

// initiating router
const router = express.Router();

// define routes
router.post('/properties',authenticate,propertyController.addProperty);

module.exports = router;