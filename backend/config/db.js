import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://olabisisamuelayomide:PREDATOR%402005@cluster0.jjqrv.mongodb.net/FOOD', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected ');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);  // Exit the process with failure if the DB connection fails
  }
};

export default connectDB;
