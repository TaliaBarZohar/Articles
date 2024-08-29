const catergory = require("../models/category");
const mongoose = require("mongoose");
module.exports = {
  getAllcategories: (req, res) => {
    category
      .find()
      .then((categories) => {
        res.status(200).json({
          categories,
        });
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  },

  createCategory: (req, res) => {
    res.status(200).json({
      message: "create a new Category",
    });
  },

  updateCategory: (req, res) => {
    const categoryId = req.params.categoryID;
    res.status(200).json({
      message: `update category - ${categoryId}`,
    });
  },

  deleteCategory: (req, res) => {
    const categoryId = req.params.categoryID;
    res.status(200).json({
      message: `Delete category - ${categoryId}`,
    });
  },
};
