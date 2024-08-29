//Here we are going to create the schema and the Category model
//Import to mongoose
const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

//Exports to categorySchema that we create
module.exports = mongoose.model("category", categorySchema);
