import mongoose from "mongoose";

export default async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.error("Error connecting to MongoDB", err);
    }
}