const  mongoose  = require("mongoose");

CollectionSchema =   mongoose.Schema({
    name:String,
    icon_class:String,
    imge:String,
    parent_id:Number,
    status:{type:Boolean, require:false , default:false}
})

const model = new mongoose.model('category',CollectionSchema) 

module.exports= model