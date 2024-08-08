// import required modules
const {bookings,users, properties} = require('../models');

// create a booking 
exports.makeBooking = async(req,res)=>{
    try {
        // get data from user
        const {userId} = req.user;

        const {propertyId, checkInDate, checkOutDate} = req.body;

        // create a booking
        const newbooking = await bookings.create({
            userId,
            propertyId,
            checkInDate,
            checkOutDate,
            status:'confirmed',
            numberOfGuests:2
        });

        // response on success
        res.status(201).json({message:"booking confirmed",newbooking});
    
    } catch (error) {
        // if any error occurs

        res.status(500).json({message:"Error while booking"});    
    }
};

// get all booking for a user
exports.getUserBooking  = async(req,res) =>{
    try {
        // get from token
        const {userId} = req.user;

        // all bookings made by user
        const booking =  await bookings.findAll({
            where:{userId}, include:[{model:properties,as:'property'}]
        });
        // response on success
        res.status(200).json(booking);
    } catch (error) {
        // if any error occurs
        
        res.status(500).json({message:"Error while fetching user wise booking"});
    }
};

// get all booking for a property 
exports.getPropertyBooking = async (req,res)=>{
    try {
        // get id from params
        const {propertyId} = req.params;

        // get all property booking
        const booking = await bookings.findAll({
            where:{propertyId},
            include:[{model:users, as:'user'}]
        });
        // response on success
        res.status(200).json(booking);
    } catch (error) {
        // if any  error occurs
        res.status(500).json({message:"Error while fetching property wise booking"});
    }
};


// update the booking
exports.updateBooking = async(req,res)=>{
    try {
        // get bookingId from req.params
        const {bookingId} = req.params;
        // get data from user
        const {checkInDate,checkOutDate} = req.body;

        const booking = await bookings.findByPk(bookingId);

        // if checkInDate not provided
        booking.checkInDate = checkInDate || booking.checkInDate;

        // if checkOutDate not provided
        booking.checkOutDate = checkOutDate || booking.checkOutDate;

        // if numberOfGuests not provided
        booking.numberOfGuests = numberOfGuests || booking.numberOfGuests;

        // save all changes
        await booking.save();

        res.status(200).json(booking);
    } catch (error) {
        // if any error occurs
        res.status(500).json({message:"Error while updating booking"});
    }
};

// delete a booking
exports.deleteBooking = async (req,res)=>{
    try {
        // get from params
        const {bookingId} = req.params;

        // find the booking by bookingId
        const booking = await bookings.findByPk(bookingId);

        // delete the booking
        await booking.destroy();

        // send back the success res
        res.status(200).json({message:"booking cancelled"});
    } catch (error) {
        // if any error occurs
        res.status(500).json({message:"Error while cancelling booking."})
    }
};