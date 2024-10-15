import express from "express";
import { addFood } from "../controllers/foodController.js";
import multer from "multer";
import path from "path";  // Helps with file paths

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join("uploads"));  // Ensure the 'uploads' directory exists
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

// Route for adding food (with image upload)
foodRouter.post("/add", upload.single("image"), addFood);

export default foodRouter;
