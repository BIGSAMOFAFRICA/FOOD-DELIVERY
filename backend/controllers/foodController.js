export const addFood = (req, res) => {
    try {
      const { name, price, description } = req.body;
      const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;  // Ensure req.file is available
  
      // Simulate adding the food item (you might save this to a DB in real use cases)
      const foodItem = {
        name,
        price,
        description,
        imageUrl
      };
  
      res.status(201).json({
        message: "Food added successfully!",
        food: foodItem
      });
    } catch (error) {
      res.status(500).json({
        message: "Error adding food",
        error
      });
    }
  };
  