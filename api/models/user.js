const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: string, require: true },
  password: { type: string, require: true },
});

module.exports = mongoose.model("User", articleSchema);
