// import required module
const express = require('express');
const homeController =require('../controller/homeController');
// initiate router
const router = express.Router();

// define routes
router.get('/getProperties',homeController.getProperties);

module.exports = router;