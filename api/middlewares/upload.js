//Imporot to Multer
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file / mimetype === "image/png") {
    cb(null, true);
  }

  cb(null, false);
};
//Create middlewares
const upload = multer({
  storage,
  limits: {
    //limit of size of image
    filesize: 1024 * 1024 * 2,
  },
  fileFilter,
});

module.exports = upload;
