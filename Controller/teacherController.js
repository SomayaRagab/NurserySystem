exports.getAllTeacher=(request,response)=>{
    console.log(request.query);
    console.log(request.params);
    response.status(200).json({data:[]});
}

exports.addTeacher=(request,response,next)=>{
  
    response.status(201).json({data:"added"});
}

exports.updateTeacher=(request,response)=>{
    response.status(200).json({data:"update"});
}
exports.deleteTeacher=(request,response)=>{
    response.status(200).json({data:"delete"});
}



