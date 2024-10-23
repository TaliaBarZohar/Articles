const express = require("express");
const router = express.Router(); //Creates a new instance of the Router object

const upload = require("../middlewares/upload");
const checkAuth = require("../middlewares/checkAuth");

const {
  getAllarticles,
  createArticle,
  getArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articles");

//If we want to get article from the web page
router.get("/", getAllarticles);

//If we want to get article from the web page y ID
router.get("/:articleID", getArticle);

//If we want to publish information on the web page
//router.post("/", checkAuth, upload.single("image"), createArticle);
router.post("/", checkAuth, upload.single("image"), createArticle);

//If we want to update this article
router.patch("/:articleID", checkAuth, updateArticle);

//If we want delete something in this article
router.delete("/:articleID", checkAuth, deleteArticle);

module.exports = router;
