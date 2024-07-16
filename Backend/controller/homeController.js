// import required modules
const {Property} = require('../models');

// get all properties on home PageUI

exports.getProperties = async (req,res)=>{
    try {
        // get all properties
        const Properties = await Property.findAll();
        
        // send back response
        res.status(200).json(Properties);

    } catch (error) {
        // if any error occurs
        console.log(error);
        res.status(500).json({message:"Internal server error "});
    }
};