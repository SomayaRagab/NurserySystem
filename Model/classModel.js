const mongoose = require("mongoose");
const autoIncrement = require("mongoose-sequence")(mongoose);


const schema = new mongoose.Schema({
    _id:Number,
    name: {type:String, require:true},
    supervisor:{type: mongoose.Types.ObjectId, ref:"teachers"},
    children:{type: [Number], ref:"child"},
});

schema.plugin(autoIncrement);
mongoose.model("classes",schema)