const mongoose=require('mongoose')
const {Schema}=mongoose

const reviewSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:false
    },
    name:{
        type: String,
        required: false
    },
    product:{
        type:Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5,
    },
    comment:{
        type:String,
        required:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
},{versionKey:false})


module.exports=mongoose.model("Review",reviewSchema)