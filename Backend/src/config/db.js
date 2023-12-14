const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://anu250867anu:anu250867anu@cluster0.cgdqaih.mongodb.net/"
    );
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
