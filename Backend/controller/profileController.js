// import required modules
const {users} = require('../models');

exports.getProfile = async(req,res)=>{
    try {
        // get userId from token
        const {userId} = req.user;
        console.log(userId);
        // find the user by userId
        const user = await users.findByPk(userId);
        console.log(user);
        if (!user) return res.json('error')
        // send the user profile as response
        res.status(200).json(user);
    } catch (error) {
        // if any error occurs

        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
};

// to update the profile
exports.updateProfile = async (req,res)=>{
    try {
        // get userId from token
        const {userId} = req.user;
        // take required input 
        const {username, email} = req.body;
        // search for user by userId
        const user = await users.findByPk(userId);

        // update the user
        await user.update({
            username,
            email,
            });
        // response on success
        res.status(200).json(user);
    } catch (error) {
        // if any error occurs
        console.log(error);
        res.status(500).json({message:"Internall server error"});       
    }
};