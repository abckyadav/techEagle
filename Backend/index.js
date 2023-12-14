const express = require("express");
require("dotenv").config;
const app = express();
const cors = require("cors");
const connectDB = require("./src/config/db");
const PORT = process.env.PORT || 3008;

const userRouter = require("./src/routes/userRoutes");

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`listening on ${PORT}`);
  } catch (error) {
    console.log("error", error.message);
  }
});
