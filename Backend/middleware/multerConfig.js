const multer = require('multer');
const path= require('path');


// define storage configuration

const storage = multer.diskStorage({
    destination:(req,res,cb)=>{
        // directory where file must be saved
        cb(null,'uploads/')
    },
    filename:(req,res,cb)=>{
        cb(null,Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({storage:storage});


module.exports = upload;