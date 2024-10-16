const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/user");

module.exports = {
  signup: (req, res) => {
    const { email, password } = req.body;

    bcrypt.hash(password, 10, (error, hash) => {
      if (error) {
        return res.status(500).json({
          error,
        });
      }
      const user = new User({
        _id: new mongoose.Types.objectId(),
        email,
        password: hash,
      });

      user.save();
    });
  },

  login: (req, res) => {
    res.status(200).json({
      message: "Login",
    });
  },
};
