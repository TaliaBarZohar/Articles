module.exports = {
  getAllcategories: (req, res) => {
    res.status(200).json({
      message: "Get all Categories",
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
