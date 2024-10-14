const mongoose = require("mongoose");
const User = require("../models/user");

module.exports = {
  signup: (req, res) => {
    const { email, password } = req.body;

    const user = new User({
      _id: new mongoose.Types.objectId(),
      email,
      password,
    });

    user.save();
  },

  login: (req, res) => {
    res.status(200).json({
      message: "Login",
    });
  },
};
