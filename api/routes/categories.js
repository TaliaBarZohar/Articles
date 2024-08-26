const express = require("express");
const router = express.Router(); //Creates a new instance of the Router object

const {
  getAllcategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categories");

//If we want to get data from the web page
router.get("/", getAllcategories);

//If we want to publish information on the web page
router.post("/", createCategory);

//If we want to update this article
router.patch("/:categoryID", updateCategory);

//If we want delete something in this article
router.delete("/:categoryID", deleteCategory);

module.exports = router;
