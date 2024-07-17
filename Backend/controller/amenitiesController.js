// import required module
const {amenities} = require('../models');

// get all amenities
exports.getAllamenities = async (req,res)=>{
    try {
        // find all amenities
        const amenity = await amenities.findAll();
        
        // send the success response
        res.status(200).json(amenity);
    } catch (error) {
        // if any error occurs
        res.status(500).json({message:"Internal server error"});
    }
};

// create an amenity
exports.createAmenity = async (req,res)=>{
    try {
        // get input from user

        const {name, description, price} = req.body;
        // craete new amenity
        const amenity = await amenities.create({
            name,
            description,
            price
        });
        // response when operation success
        res.status(201).json({message:"Success",amenity});

    } catch (error) {
        // if any error occurs
        res.status(500).json({message:"Internal server error"});
    }
}
