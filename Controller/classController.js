const { body } = require("express-validator")
const mongoose = require("mongoose");
require("./../Model/classModel")

const classSchema = mongoose.model("classes")
const teacherSchema = mongoose.model("teachers")
const childSchema = mongoose.model("child")

// select *
exports.getAllClass=(request,response,next)=>{
    classSchema.find({})
    .populate({path:"supervisor",select:{fullname:1}})
    .populate({path:"children",select:{fullname:1}})
    .then((data)=>{
        response.status(200).json({data});
    }).catch((error)=> next(error));
}


// insert
exports.addClass=(request,response,next)=>{

    teacherSchema.findOne({_id:request.body.supervisor},{_id:1})
    .then(data=>{
            if(data==null)
            {
                    next(new Error("supervisor not Found"))
            }
            else
                return childSchema.find({ _id: { $in: request.body.children } });
            
        }).then(children =>{

                if(children.length != request.body.children.length)
                    next(new Error("children not found"));
                else 
                return new classSchema({
                    _id: request.body._id,
                    name: request.body.name,
                    supervisor: request.body.supervisor,
                    children: request.body.children,
                    })
                    .save()
        })
        .then(data => response.status(201).json({data}) )
        .catch(error=>next(error))

}


// update
exports.updateClass = async (request, response, next) => {

        let teacher = await teacherSchema.findOne({_id: request.body.supervisor})
        if(teacher == null) next(new(Error("supervisor not found")))
        else{
            let children = await childSchema.find({_id: { $in: request.body.children}});
            if(children.length != request.body.children.length)
                next(new Error("children not found"));
            else{
                classSchema.updateOne(
                    {_id : request.body._id},
                    {
                        $set : {
                            name: request.body.name,
                            supervisor: request.body.supervisor,
                            children: request.body.children,
                        }
                    }
                ).then( data =>{
                if(data.matchedCount == 0) next(new Error("class not found "));
                else response.status(200).json({data})
                }).catch((error) => next(error));
            }
        }
    }


// delete
exports.deleteClass=(request,response,next)=>{

    classSchema.deleteOne({_id:request.body._id})
    .then((data)=>{
        if(data.deletedCount == 0){
            next(new Error("child not found for delete"));
        }
        else   response.status(200).json({data});
    }).catch(error => next(error))
   
}

exports.getClass=(request,response,next)=>{
    classSchema.findOne({_id:request.params._id})
    .then((data) =>{
        if(data==null)
        {
            next(new Error("child not found for get"));
        }
        else
        response.status(200).json({data});
    }).catch((error) => next(error))
}

exports.getClassChildern=(request,response,next)=>{
    classSchema.findOne({_id:request.params._id},{children:1})
    .populate({path:"children",select:{fullname:1}})
    .then((data) =>{
        if(data==null)
        {
            next(new Error("class not found for get"));
        }
        else
        response.status(200).json({data});
    }).catch((error) => next(error))
   
}

exports.getClassTeacher=(request,response,next)=>{
    classSchema.findOne({_id:request.params._id},{supervisor:1})
    .populate({path:"supervisor",select:{fullname:1}})
    .then((data) =>{
        if(data==null)
        {
            next(new Error("class not found for get"));
        }
        else
        response.status(200).json({data});
    }).catch((error) => next(error))
}