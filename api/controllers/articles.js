const mongoose = require("mongoose");
const Article = require("../models/article");
//We use this directory to verify that a
//category ID exists before adding an article
const Category = require("../models/category");

module.exports = {
  getAllarticles: (req, res) => {
    Article.find()
      .then((articles) => {
        res.status(200).json({
          articles,
        });
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  },

  createArticle: (req, res) => {
    const { title, description, content, categoryId } = req.body;

    // Checking if categoryId exists
    Category.findById(categoryId)
      .then((category) => {
        // If category is found, create a new article
        const article = new Article({
          title,
          description,
          content,
          categoryId,
        });

        return article.save();
      })
      .then(() => {
        res.status(200).json({
          message: "Created article",
        });
      })
      .catch((error) => {
        res.status(404).json({
          message: "Category not found",
        });
      });
  },

  getArticle: async (req, res) => {
    const articleId = req.params.articleID;
    Article.findById(articleId)
      .then((article) => {
        res.status(200).json({
          article,
        });
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  },

  updateArticle: async (req, res) => {
    const articleId = req.params.articleID;
    const { categoryId } = req.body;

    if (categoryId) {
      return Category.findById(categoryId)
        .then((category) => {
          // If category is found, create a new article
          const article = new Article({
            title,
            description,
            content,
            categoryId,
          });

          return article.save();
        })
        .then(() => {
          res.status(200).json({
            message: "Created article",
          });
        })
        .catch((error) => {
          res.status(404).json({
            message: "Category not found",
          });
        });
    }
    Article.findOneAndUpdate(
      { articleId },
      { $set: { title: req.body.title } },
      { new: true }
    )
      .then(() => {
        res.status(200).json({
          message: "Article Updated",
        });
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  },

  deleteArticle: (req, res) => {
    const articleId = req.params.articleID;

    Article.deleteOne({ _id: articleId })
      .then(() => {
        res.status(200).json({
          message: `Article _id:${articleId} Deleted`,
        });
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  },
};
