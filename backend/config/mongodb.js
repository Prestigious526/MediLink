import mongoose from "mongoose";


const connectDB = async () => {
  try {
    console.log("Connecting...");

    await mongoose.connect(process.env.MONGODB_URI, {
      family: 4
    });

    console.log("Database Connected");
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;