//Imporot to Multer
const multer = require("multer");
//Create middlewares
const upload = multer({
  dest: "uploads/",
});

module.exports = upload;
