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
    const { title, description } = req.body;

    const category = new category({
      title,
      description,
    });

    category
      .save()
      .then(() => {
        res.status(200).json({
          message: "Created category",
        });
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
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
