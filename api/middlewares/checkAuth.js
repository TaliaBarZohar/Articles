const jwt = require("jwtwebtoken");

const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorizatoion.split(" ")[1];
    jwt.verify(token, process.env.jwt_KEY);
    next();

    //If token or jwt.verify will failed i will be here
  } catch (error) {
    res.status(401).json({
      message: "Auth failed",
    });
  }
};

module.exports = checkAuth;
