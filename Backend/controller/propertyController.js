// import the required modules
const { properties,amenities } = require("../models");

//add new property(only works when user is logged in)
exports.addProperty = async (req, res) => {
  try {
    // get information as input
    // get userid from token
    const { userId } = req.user;

    // get all info as a input
    const { locationId, name, address, roomType, price, image } = req.body;

    // create a new property
    const newProperty = await properties.create({
      userId,
      locationId,
      name,
      address,
      roomType,
      price,
      image,
    });
    // send the newly created property as a response
    res
      .status(201)
      .json({ message: "New property created successfully.", newProperty });
  } catch (error) {
    // if any error occurs
    console.log(error);
    res.status(500).json({ message: "Error while adding a property" });
  }
};

// update an existing properties(if Logged In)
exports.updateProperties = async (req, res) => {
  try {
    // get information as input
    // get userid from token
    const { userId } = req.user;
    // get propertyId from request parameters
    const { propertyId } = req.params;

    // get all info as input
    const { locationId, name, address, roomType, price, image } = req.body;

    // find the property by propertyId and userId
    const property = await properties.findOne({
      where: { propertyId, userId },
    });

    if (!property)
      return res.status(404).json({ message: "Property not found" });

    // update the property

    await property.update({
      locationId,
      name,
      address,
      roomType,
      price,
      image,
    });
    // send the updated property as a response
    res.status(200).json({ message: "Property Updated", property });
  } catch (error) {
    // if any error occurs
    res.status(500).json({ message: "Error while updating a property" });
  }
};

// for deleting an property functionality(if logged in)
exports.deleteProperty = async (req, res) => {
  try {
    // get information as input
    // get userid from token
    const { userId } = req.user;

    // get propertyId from request parameters
    const { propertyId } = req.params;

    // find the property using userId and propertyId
    const property = await properties.findOne({
      where: { userId, propertyId },
    });

    if (!property)
      return res.status(404).json({ message: "Property not found" });

    // to delete the property
    await property.destroy();

    // send a success response
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    // if any error occurs
    res.status(500).json({ message: "Error while deleting a property" });
  }
};


// get all properties (self-listed)
exports.getAllProperties = async (req,res)=>{
    try {
      // get information as input
      // get userid from token
      const { userId } = req.user;
    
      // fetch all properties using userId
      const Allproperties = await properties.findAll({where:{userId}});

      // send the success reponse
      res.status(200).json(Allproperties);
    } catch (error) {
        // if any error occurs
        res.status(500).json({message:"Error while getting all properties"});
    }
};

// associate amenities with properties

// exports.addAmenitiesToProperty = async(req,res)=>{
//   const {propertyId} = req.params;

//   const {amenity }= req.body;

//   try {
//     const Property = await properties.findByPk(propertyId);
//     if (!Property) return res.status(404).json({message:"Property not found"});

    // find all amenities by Id
//     const allAmenities = await amenities.findAll({where:{id:amenities}});
//     if (allAmenities.length !== amenity.length){  
//         return res.status(404).json({message:"One or more amenities not found"})
//     }
//   } catch (error) {
    
//   }
// }