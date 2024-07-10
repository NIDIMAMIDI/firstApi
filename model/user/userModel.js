import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email:{
        type:String, 
        required: true
        
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum: ['user', 'admin']
    }
})

export const User = mongoose.model('User', userSchema)