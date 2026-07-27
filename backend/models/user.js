const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
   BookName:{
    type:String,
    required:true
   },
   Author:{
    type:String,
    required:true
   },
   Title:{
    type:String,
    required:true
   },
   SellingPrice:{
    type:Number,
    required:true
   },
   Date:{
    type:Date
    
   }
  
   


},{timestamps:true})
const bt=mongoose.model("bt",userSchema)
module.exports=bt;