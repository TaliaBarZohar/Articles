const express = require("express");
const router = express.Router(); //Creates a new instance of the Router object

const {
  getAllcategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categories");

//If we want to get data from the web page
router.get("/", getAllcategories);

//If we want to publish information on the web page
router.post("/", createCategory);

//If we want to get category from the web page by ID
router.get("/:categoryId", getCategory);

//If we want to update this category
router.patch("/:categoryId", updateCategory);

//If we want delete something in this category
router.delete("/:categoryId", deleteCategory);

module.exports = router;
