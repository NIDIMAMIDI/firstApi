import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()




// console.log(process.env.DATABASE)

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log('Database has been connected successfully');
})