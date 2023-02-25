const multer = require("multer");
const path = require("path")

module.exports = multer({
    storage:multer.diskStorage({
        destination: (request,file,callbackFun)=>{
            callbackFun(null ,path.join(__dirname,"..","..","images","teacher"));
        },
        filename: (request,file,callbackFun)=>{
            let extention = path.extname(file.originalname);
            let fileName = path.basename(file.originalname,extention);
            let allFileName = file.fieldname + '-' + fileName + '-' + Date.now() + extention;
            callbackFun(null , allFileName);
        }
    }),
    fileFilter: (request,file,callbackFun)=>{
        if(file.mimetype=="image/png" || file.mimetype=="image/jpg" || file.mimetype=="image/jpeg"){
            callbackFun(null,true)
        }
        else callbackFun(new Error("file must be image only"))
    }
});