const Catergory = require("../models/category");
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

  getCategory: (req, res) => {
    const categoryId = req.params.categoryID;

    Catergory.findById(categoryId)
      .then((category) => {
        res.status(200).json({
          category,
        });
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  },

  updateCategory: async (req, res) => {
    const categoryId = req.params.categoryId;

    Article.findOneAndUpdate(
      { categoryId },
      { $set: { title: req.body.title } },
      { new: true }
    )
      .then(() => {
        res.status(200).json({
          message: "Category Updated",
        });
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  },

  deleteCategory: (req, res) => {
    const categoryId = req.params.categoryId;

    Article.deleteOne({ _id: categoryId })
      .then(() => {
        res.status(200).json({
          message: `CategoryId _id:${categoryId} Deleted`,
        });
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  },
};
