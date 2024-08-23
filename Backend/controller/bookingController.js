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
            checkInDate :new Date(checkInDate),
            checkOutDate:new Date (checkOutDate),
            status:'confirmed',
            numberOfGuests:2
        });

        await properties.update(
            { isBooked:true},
            {where:{propertyId:propertyId}}
        );

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
            where:{userId}, include:[{model:properties,as:'property',
            attributes:['name','address','price','roomType']
            }]
        });
        // response on success
        res.status(200).json(booking);
    } catch (error) {
        // if any error occurs
        
        res.status(500).json({message:"Error while fetching user wise booking"});
    }
};

// get all booking for a property 
exports.getBookingForOwner = async (req,res)=>{
    try {
        const {userId}= req.user;
        const allProperties =  await properties.findAll({
            where:
            {
                userId,
                isBooked:true
            },
            attributes:['name','address','roomType','price'],
            include:[{
                model:bookings,
                as :'bookings',
                attributes:['checkInDate','checkOutDate','numberOfGuests'],
                required:false
            }
            ]
        })
        const allBooking = allProperties.flatMap(property=>property.bookings.map(bookings=>({
            propertyName:property.name,
            propertyRoomName:property.roomType,
            propertyAddress:property.address,
            propertyPrice:property.price,
            checkInDate:bookings.checkInDate,
            checkOutDate:bookings.checkOutDate,
            numberOfGuests:bookings.numberOfGuests
        }))
        );
        res.status(200).json(allBooking);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Failed to get booking"})
    }
}


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

        if (!booking) return res.status(404).json({message:"booking not found"});
        
        const property = await properties.findOne(
            {where :{propertyId:booking.propertyId}}
        )

        if (!property) return res.status(404).json({message:"Property not found"})

        property.isBooked = false;
        await property.save();

        // delete the booking
        await booking.destroy();

        // send back the success res
        res.status(200).json({message:"booking cancelled"});
    } catch (error) {
        // if any error occurs
        console.log(error);
        console.error(error);
        res.status(500).json({message:"Error while cancelling booking."})
    }
};