const bcryptjs = require('bcryptjs');

const {Users} = require('../models');


exports.signup = async (req,res) =>{
    try
    {// get the required field as input
    const {email,username,password,role} = req.body;

    // check the user is already exits
    const checkUser = await Users.findOne({where:{email}})
    
    // if user already exits
    if (checkUser)return res.status(400).json({message:"You already have account with us! Please Login!"});


    // if user not exits 
    // hash the password
    const hashPassword = await bcryptjs.hash(password,10);

    // create a new user
    const createUser = await Users.create(
        {   username,
            email,
            password:hashPassword,
            role }
        );
    
    //send back response
    res.status(201).json({message:"User created Successfully!",createUser});}
    catch(error){
        // if any error occurs
        res.status(500).json({message:"Internal Server Error"});
    }
};