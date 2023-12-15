const jwt = require("jsonwebtoken");

const checkManager = (req, res, next) => {
  try {
    const authHeader = req.headers.Authorization || req.headers.authorization;

    if (authHeader !== undefined && authHeader.startsWith("Bearer")) {
      const token = authHeader.split(" ")[1];

      jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
        console.log("decoded:", decoded.userType);
        if (decoded.userType === "manager") {
          next();
        } else {
          return res
            .status(401)
            .json({ msg: "User is not authorised for this operation" });
        }
      });
    } else {
      return res.status(401).json({ msg: "token is missing in the request" });
    }
  } catch (error) {
    return res.status(400).json({
      msg: "User is not authorised or token is missing in the request, checkManager",
      error: error.message,
    });
  }
};

module.exports = checkManager;
