const jwt = require("jsonwebtoken");
const { Users } = require("../models"); 

module.exports = async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
    };

    try {
        const getUserId = jwt.verify(token, process.env.JWT_SECRET);
        const user = await Users.findByPk(getUserId.id); 
    
        if (!user) {
        return res.status(404).json({ message: "User not found" });
    };

        req.user = user; 
        next();
    } catch (error) {
    res.status(400).json({ message: "Invalid token." });
    }
};
