// import required modules
const {Property} = require('../models');

// get all properties on home PageUI

exports.getProperties = async (req,res)=>{
    try {
        // get all properties
        console.log(`hi`);
        const Properties = await Property.findAll();
        console.log(Properties);
        console.log(`hello`);
        // send back response
        res.status(200).json(Properties);

    } catch (error) {
        // if any error occurs
        console.log(error);
        res.status(500).json({message:"Internal server error "});
    }
};