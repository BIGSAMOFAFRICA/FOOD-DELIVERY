import foodModel from "../models/foodModel.js";
import fs from 'fs';

// Add food item
const addFood = async (req, res) => {
  const image_filename = req.file ? req.file.filename : null;

  if (!image_filename) {
    return res.status(400).json({ success: false, message: "Image is required" });
  }

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: parseFloat(req.body.price),
    category: req.body.category,
    Image: image_filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error saving food item" });
  }
};

// List food items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find(); // Fetch all food items
    res.json({ success: true, data: foods });
  } catch (error) {
    console.error("Error fetching food items:", error);
    res.status(500).json({ success: false, message: "Error fetching food items" });
  }
};

// remove food item
const removeFood = async (req,res)=>{
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})
    
     await foodModel.findByIdAndDelete(req.body.id);
     res.json({success:true,message:"Food Removed successfully"})
    } catch (error) {
        console.log(error);
       res.json({success:false,message:"Error"})
    }
}
export { addFood, listFood,removeFood};
