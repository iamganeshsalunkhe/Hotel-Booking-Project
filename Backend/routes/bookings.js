// import required module
const express = require('express');
const bookingController = require('../controller/bookingController');
const authenticate = require('../middlware/authenticate');

// initiate router
const router = express.Router();

// get all booking
router.post('/booking',authenticate,bookingController.makeBooking);

// get booking for a user
router.get('/booking/user',authenticate,bookingController.getUserBooking);

// get booking for a property
router.get('/booking/property/:propertyId',authenticate,bookingController.getPropertyBooking);

// update the booking
router.put('/booking/:bookingId',authenticate,bookingController.updateBooking);

// delete the booking
router.delete('/booking/:bookingId',authenticate,bookingController.deleteBooking);

module.exports = router;
