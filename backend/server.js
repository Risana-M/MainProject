
//main backend entry piont is server.js

import express from "express";// Import Express framework to create server and REST APIs
import dotenv from "dotenv";// Import dotenv to load environment variables from .env file
import cors from "cors";// Enable CORS so frontend can communicate with backend APIs
import connectDB from "./config/db.js";// Import function to connect to MongoDB database

//files conatin API endpoints
import authRoutes from "./routes/authRoutes.js";//login/signup
import productRoutes from "./routes/productRoutes.js";//product CRUD
import orderRoutes from "./routes/orderRoutes.js";//order creation
import contactRoutes from "./routes/contactRoutes.js";// concat form

// Import custom middleware for handling 404 and server errors
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();//read .env file and load variables into process.env
connectDB();//connect to mongoDB database

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true }));

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://main-project-nu-ten.vercel.app"
  ],
  credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/contact", contactRoutes);

app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("FreshCo API Running 🚀");
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);