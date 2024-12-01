import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,requires:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}}
},{minimize:false})

const userModel=mongoose.user || mongoose.model("user",userSchema);
export default userModel;