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
};

// update an existing amenity

exports.updateAmenity = async(req,res) =>{
    try {
        // get id 
        const {amenityId} = req.params;
        // get input from user
        const {name,description, price} = req.body;

        //serach for amenity using amenityId
        const existingamenity = await amenities.findByPk(amenityId);
        
        // update the amenity
        // if name not provided
        existingamenity.name = name || existingamenity.name;
        // if description not provided
        existingamenity.description = description || existingamenity.description;

        // if price not provided
        existingamenity.price = price || existingamenity.price;

        await existingamenity.save();

        // response on success
        res.status(200).json(existingamenity);

    } catch (error) {
        // if any error occurs
        res.status(500).json({message:"Internal error"});
    }
};

// delete an existing amenity
exports.deleteAmenity = async (req,res)=>{
    try {
        // get amenityId from params
        const {amenityId} = req.params;
        
        // get amenity by Id
        const todeleteamenity = await amenities.findByPk(amenityId);

        // if amenity not found
        if (!todeleteamenity) return res.status(404).json({message:'Amenity not found'})
        
        // delete the amenity
        await todeleteamenity.destroy();
  
        // response on success
        res.status(200).json({message:"Amenity deleted successfully"});

    } catch (error) {
        // if any error occurs
        res.status(500).json({message:"Internal server error"});
    }
};