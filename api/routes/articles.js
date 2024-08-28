const express = require("express");
const router = express.Router(); //Creates a new instance of the Router object

const {
  getAllarticles,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articles");

//If we want to get data from the web page
router.get("/", getAllarticles);

//If we want to publish information on the web page
router.post("/", createArticle);

//If we want to update this article
router.patch("/:articleID", updateArticle);

//If we want delete something in this article
router.delete("/:articleID", deleteArticle);

module.exports = router;
