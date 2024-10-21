const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = {
  signup: (req, res) => {
    const { email, password } = req.body;

    //We will use the 'find' function to check if there is no such
    //email for any user, if such a user exists enter
    // Then and an error will be returned
    User.find({ email }).then((users) => {
      if (users.length >= 1) {
        return res.status(409).json({
          message: "Email exists",
        });
      }
      //If not exist create this user
      bcrypt.hash(password, 10, (error, hash) => {
        if (error) {
          return res.status(500).json({
            error,
          });
        }
        const user = new User({
          _id: new mongoose.Types.objectId(),
          email,
          password: hash, //Save the hash in the DB
        });
        user
          .save()
          .then((result) => {
            console.log(result);

            res.status(200).json({
              message: " User created",
            });
          }) //If was problem with the save of user we inter to catch
          .catch((error) => {
            res.status(500).json({
              error,
            });
          });
      });
    });
  },

  login: (req, res) => {
    const { email, password } = req.body; //What we get from the user

    user.find({ email }).then((users) => {
      if (users.length === 0) {
        //We use wuth return beacuse if we not find user in the db we want to stop and to exit
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      const [user] = users; //We use in destructuring beacuse we that email its unique so it will be in the array at position 0
      bcrypt.compare(password, use.password, (error, result) => {
        if (error) {
          return res.status(401).json({
            message: "Auth failed",
          });
        }
        //result is boolean value
        if (result) {
          const token = jwt.sign(
            {
              id: user._id,
              email: user._email,
            },
            process.env.jwt_KEY,
            {
              expiresIn: "1H",
            }
          );
          //If the value of password is true
          return res.status(200).json({
            message: "Auth successful",
            token,
          });
        }
        //If the value of password is false
        res.status(401).json({
          message: "Auth failed",
        });
      });
    });
  },
};
