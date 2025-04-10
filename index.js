import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import jobRoutes from "./routes/jobRoutes.js";




dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API base route
app.get("/", (req, res) => {
  res.send("Student Job Tracker API is running ");
});

// Routes
app.use("/api/jobs", jobRoutes);



// DB connect and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
