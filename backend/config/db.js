import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);// Print error message in console if connection fails
    process.exit(1);// Stop the server if database connection fails
  }
};

export default connectDB;