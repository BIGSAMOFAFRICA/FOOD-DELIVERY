import express from "express";
import { addFood, listFood,removeFood } from "../controllers/foodController.js"; // Import listFood as well
import multer from "multer";

const foodRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    },
});

const upload = multer({ storage: storage });

// Route to add food item
foodRouter.post("/add", upload.single("image"), addFood);

// Route to list food items
foodRouter.get("/list", listFood); // Ensure listFood is defined and imported
foodRouter.post("/remove",removeFood);

export default foodRouter;
