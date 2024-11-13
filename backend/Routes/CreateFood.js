const express = require("express");
const router = express.Router();
const food = require("../models/Food");
const multer = require("multer");
const fs = require("fs");

// Configure multer storage for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "../frontend/public/fotos";
    if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath); // Create upload folder if it doesn't exist
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  }
});
const upload = multer({ storage: storage });

router.post("/createfood", upload.single("image"), async (req, res) => {
  try {
    // Check if req.file exists
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Image file is required.' });
    }

    // Create food item
    const foodItem = await food.create({
      name: req.body.name,
      categoryName: req.body.categoryName,
      shortDescription: req.body.shortDescription,
      description: req.body.description,
      ingredients: JSON.parse(req.body.ingredients), // Parse ingredients if they are sent as JSON
      image: req.file.path  // Store the image path if uploaded
    });

    res.json({ success: true, foodItem });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ success: false, message: 'Internal Server Error', error: err.message });
  }
});

router.post("/getFood", async (req, res) => {
  try {
    res.send([global.cat, global.food])
  } catch (error) {
    console.error(error.message);
  }
})

module.exports = router;
