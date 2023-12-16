const express = require("express");
require("dotenv").config;
const app = express();
const cors = require("cors");
const connectDB = require("./src/config/db");
const PORT = process.env.PORT || 3008;

//middleware
app.use(express.json());
app.use(cors());

// router Config
const userRouter = require("./src/routes/userRoutes");
const productRouter = require("./src/routes/productRoutes");
const cartRouter = require("./src/routes/cartRoutes");

//router routes
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);

//server setup
app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`listening on ${PORT}`);
    return res.status(200).json({ msg: `listening on ${PORT}` });
  } catch (error) {
    console.log("error", error.message);
  }
});
