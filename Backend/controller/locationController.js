// import required modules
const {locations} = require('../models');

exports.getLocation = async (req,res) =>{
   try
   { // get all locations
    const Locations =await locations.findAll();

    // send back response
    res.status(200).json(Locations);}
    catch(error){
        res.status(500).json({message:"Error while getting location"})
    }

};