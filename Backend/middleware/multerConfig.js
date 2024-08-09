const multer = require('multer');
const path= require('path');


// define storage configuration

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        // directory where file must be saved
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
});
const maxSize = 1 * 1024 *1024 // 1MB
const upload = multer({
    storage:storage,
    fileFilter:function(req,file,cb){
        if (
            file.mimetype =='image/png'||
            file.mimetype == 'image/jpg'||
            file.mimetype =='image/jpeg'
        ){
            cb(null,true);
        }else{
                cb(null,false);
                return cb(new Error("Only .png, .jpg, .jpeg files allowed"))
        }
    },
    limits:{fileSize:maxSize},
});

function checkFileType(file,cb){
    //allowed file types
    
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);


    if (mimetype && extname){
        return cb(null, true);
    }else{
        cb('Error:Image only!');
    }
}


module.exports = upload;