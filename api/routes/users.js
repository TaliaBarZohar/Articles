const express = require("express");
const router = express.Router(); //Creates a new instance of the Router object

const { signup, login } = require("../controllers/users");

//If we want to get data from the web page
router.post("/signup", signup);

//If we want to publish information on the web page
router.post("/login", login);

module.exports = router;
