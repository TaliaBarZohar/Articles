const mongoose = require("mongoose");
const Category = require("../models/category");

module.exports = {
  getAllcategories: (req, res) => {
    Category.find()
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

    const category = new Category({
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

    Category.findById(categoryId)
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
    console.log(req.body.description);
    Category.findOneAndUpdate(
      { _id: categoryId },
      { $set: { description: req.body.description } },
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

    Category.deleteOne({ _id: categoryId })
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
