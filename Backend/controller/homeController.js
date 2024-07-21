// import required modules
const {properties} = require('../models');

// get all properties on home PageUI

exports.getProperties = async (req,res)=>{
    try {
        // get all properties
        const allProperties = await properties.findAll();
        
        // send back response
        res.status(200).json(allProperties);

    } catch (error) {
        // if any error occurs 
        console.log(error);
        
        res.status(500).json({message:"Error while getting all properties on home page"});
    }
};