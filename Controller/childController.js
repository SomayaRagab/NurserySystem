exports.getAllChild=(request,response)=>{
    response.status(200).json({data:[]});
}

exports.addChild=(request,response,next)=>{
  
    response.status(201).json({data:"added"});
}

exports.updateChild=(request,response)=>{
    response.status(200).json({data:"update"});
}
exports.deleteChild=(request,response)=>{
    response.status(200).json({data:"delete"});
}

exports.getChild=(request,response)=>{
    response.status(200).json({data:request.params._id});
}