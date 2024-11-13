const mongoose = require("mongoose");

const URI = "mongodb+srv://aakrish32:vM016PIMvCcmfV3l@cluster0.4da6m.mongodb.net/recipe?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    // Connecting to MongoDB
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");

    // // Uncomment the following lines to fetch data
    const fetchData = await mongoose.connection.db.collection("categoryName").find({}).toArray();
    console.log(fetchData);


  } catch (error) {
    console.error("Failed to connect to MongoDB or fetch data", error);
  }
};

module.exports = mongoDB;
