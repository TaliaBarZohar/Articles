//Here we are going to create the schema and the article model

//Import to mongoose
const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    requrie: true,
    ref: "Catergory",
    image: { type: String },
  },
});

//Exports to articleSchema that we create
module.exports = mongoose.model("Article", articleSchema);
