import mongoose from "mongoose";

export default async function connectDB(){
    try{
        await mongoose.connect(`mongodb://127.0.0.1:27017/Next-auth`)
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.error("Error connecting to MongoDB", err);
    }
}