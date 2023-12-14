const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const newToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

const registerUser = async (req, res) => {
  const { name, email, password, userType, address, number } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: "User already exists! Please Login" });
    }
    if (!name || !email || !password || !number) {
      return res.status(400).json({ msg: "All fields are mandatory" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
      userType,
      address,
      number,
    });
    await newUser.save();
    return res.status(200).json({ msg: "Registration Successful", newUser });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Registration failed! Try again Later" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    const token = newToken(user);

    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    const matchPassword = await bcrypt.compare(password, user.password);

    if (matchPassword) {
      const token = jwt.sign(
        { email: user.email, userId: user._id, userType: user.userType },
        process.env.JWT_SECRET_KEY
      );
      return res.status(200).json({ msg: "successful", token, user });
    } else {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Login failed! Please Try again Later" });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
