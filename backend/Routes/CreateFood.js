const express = require("express");
const router = express.Router();
const food = require("../models/Food");


router.post("/createfood", async (req, res) => {
try {
    // Create food item
    const foodItem = await food.create({
        name: req.body.name,
        categoryName: req.body.categoryName,
        shortDescription: req.body.shortDescription,
        description: req.body.description,
        ingredients: req.body.ingredients,
    });
    
    res.json({ success: true, foodItem });
} catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ success: false, message: 'Internal Server Error', error: err.message });
}
});

module.exports = router;
