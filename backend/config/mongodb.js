import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    console.log("URI exists:", !!process.env.MONGODB_URI);

    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log("Database Connected");
    console.log("Database Name:", conn.connection.name);
    console.log("Host:", conn.connection.host);

  } catch (error) {
    console.error("Database connection error:");
    console.error(error);
    throw error;
  }
};

export default connectDB;