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

