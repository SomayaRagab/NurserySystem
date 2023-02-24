const mongoose = require("mongoose");



const schema = new mongoose.Schema({
    _id: Number,
    fullname:{type:String,required:true},
    age:Number,
    level:String,
    address:Object,
});


mongoose.model("child",schema);