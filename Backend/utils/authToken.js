// import required module
const jwt = require('jsonwebtoken');

// Function to generate an authentication token for a user
const generateAuthToken = (user) =>{    
    const token = jwt.sign(
        {id:user.userId,email:user.email,role:user.role},// payload 

        process.env.JWT_SECRET,// the secret key for token
        
        {expiresIn:'1h'});// token expiration time
    
    // return the generated token
    return token;
};


module.exports = generateAuthToken;