const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const teacherSchema = mongoose.model("teachers")

exports.login = (request,response,next)=>{

    if(request.body.userName == "admin" && request.body.password == "123" ){
        let token =jwt.sign({_id:10,role:"admin"} , 
        "nurserySystem",
        {expiresIn:"1h"}
        )
        response.status(200).json({message:"you are authenticated" , token});
    }
    else {
        teacherSchema.findOne({fullname:request.body.userName , password:request.body.password})
        .then(data =>{
            if(data == null ){
                let error =new Error("not authenticated");
                error.status=401;
                next(error);
            }
            else{
                let token =jwt.sign({_id:data._id,role:"teacher"} , 
                "nurserySystem",
                {expiresIn:"1h"}
                )
                response.status(200).json({message:"you are authenticated" , token});
            }
        }).catch(error => next(error))
       
    }

}