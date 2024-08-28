const mongoose = require("mongoose");
const Article = require("../models/article");

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
    const { title, description, content } = req.body;

    const article = new Article({
      title,
      description,
      content,
    });

    article
      .save()
      .then(() => {
        res.status(200).json({
          message: "Created article",
        });
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  },

  getArticle: (req, res) => {
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
    const articleId = req.params.articleId;

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
    res.status(200).json({
      message: `Delete article - ${articleId}`,
    });
  },
};
