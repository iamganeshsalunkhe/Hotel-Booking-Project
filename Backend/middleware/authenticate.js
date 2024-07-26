const jwt = require("jsonwebtoken");
const { users } = require("../models"); 

module.exports = async (req, res, next) => {
    // getting token
    const token = req.cookies.token;
    
    // if token not provided
    if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
    };

    try {
        // check user is valid using jwt
        const getUser = jwt.verify(token, process.env.JWT_SECRET);
        if (!getUser) return res.status(403)

        // extract user using Primary key 
        const user = await users.findByPk(getUser.id); 
    
        // if user not found
        if (!user) {
        return res.status(404).json({ message: "User not found" });
    };
        // attach user object to request for further routes
        req.user = user; 

        //call the next function
        next();
    } catch (error) {
        // if invalid token provided
    res.status(400).json({ message: "Invalid token." });
    }
};
