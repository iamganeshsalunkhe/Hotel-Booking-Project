// import the required modules
const {properties}  = require('../models');

//add new property(only works when user is logged in)
exports.addProperty  = async (req,res) =>{
    try
    {// get information as input
    // get userid from token
    const {userId} = req.user;

    // get all info as a input
    const {locationId, name, address, roomtype,price, image} = req.body;

    // create a new property
    const newProperty = await properties.create({
        userId,
        locationId,
        name,
        address,
        roomtype,
        price,
        image
        });
    // send the newly created property as a response
        res.status(201).json({message:"New property created successfully.",newProperty});
    
    }
    catch(error){
        // if any error occurs 
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    };
};