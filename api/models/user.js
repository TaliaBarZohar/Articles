const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: string, require: true, unique: true },
  password: { type: string, require: true },
});

//We export it that another function or variable can use it
module.exports = mongoose.model("User", articleSchema);
