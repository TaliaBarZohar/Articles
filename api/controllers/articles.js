module.exports = {
  getAllarticles: (req, res) => {
    res.status(200).json({
      message: "Get all Articles",
    });
  },

  createArticle: (req, res) => {
    res.status(200).json({
      message: "create a new article",
    });
  },

  updateArticle: (req, res) => {
    const articleId = req.params.articleID;
    res.status(200).json({
      message: `update article - ${articleId}`,
    });
  },

  deleteArticle: (req, res) => {
    const articleId = req.params.articleID;
    res.status(200).json({
      message: `Delete article - ${articleId}`,
    });
  },
};
