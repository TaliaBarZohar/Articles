const checkAuth = (req, res, next) => {
  console.log(req.headers);

  next();
};

module.exports = checkAuth;
