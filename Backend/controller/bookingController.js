// import required modules
const {bookings,users, properties} = require('../models');

// create a booking 
exports.makeBooking = async(req,res)=>{
    try {
        // get data from user
        const {userId} = req.user;

        const {propertyId, checkInDate, checkOutDate, numberOfGuests} = req.body;

        // create a booking
        const newbooking = await bookings.create({
            userId,
            propertyId,
            checkInDate,
            checkOutDate,
            numberOfGuests
        });

        // response on success
        res.status(201).json({message:"booking confirmed",newbooking});
    
    } catch (error) {
        // if any error occurs

        res.status(500).json({message:"Internal server error"});    
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
        console.log(error);
        res.status(500).json({message:"Internal server error"});
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
        res.status(500).json({message:"Internal server error"});
    }
};