import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://BIGSAMOFAFRICA:PREDATOR@cluster0.vx6my.mongodb.net/order', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);  // Exit the process with failure if the DB connection fails
    }
};
