// import required modules
const bcryptjs = require('bcryptjs');
const {users} = require('../models');
const generateAuthToken = require('../utils/authToken');


// for signup functionality
exports.signup = async (req,res) =>{
    try
    {// get the required field as input
    const {email,username,password,role} = req.body;

    // check the user is already exits
    const checkUser = await users.findOne({where:{email}})
    
    // if user already exits
    if (checkUser)return res.status(400).json({message:"You already have account with us! Please Login!"});


    // if user not exits 
    // hash the password
    const hashPassword = await bcryptjs.hash(password,10);

    // create a new user
    const createUser = await users.create(
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

//for login functionality
exports.login = async(req,res) =>{
    try {
        // get input from user (email,password);
        const{email,password} = req.body;

        // find user using email
        const user = await users.findOne({where:{email}});

        // if email not exits
        if (!user) return res.status(400).json({message:"Invalid email or You don't have account with us!!"});

        // check for the right password 
        const checkPassword = await bcryptjs.compare(password,user.password);

        // if password is wrong
        if (!checkPassword) return res.status(400).json({message:"Invalid password"});


        // generate token if user have correcr credentials
        const token= generateAuthToken(user);
        res.status(200).json({token});

    } catch (error) {
        // if any error occurs
        res.status(500).json({message:"Internal server error"});
    }
};
