import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import productRoutes from "./routers/product.route.js";
import path from "path";
import { fileURLToPath } from "url";

// Setup for ES modules: Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

// Middleware to parse JSON must come before the routes
app.use(express.json());

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Front-end/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../Front-end", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
