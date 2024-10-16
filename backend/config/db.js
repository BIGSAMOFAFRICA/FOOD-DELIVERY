import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://BIGSAMOFAFRICA:PREDATOR@cluster0.vx6my.mongodb.net/order').then(()=>console.log("DB Connected"));
}