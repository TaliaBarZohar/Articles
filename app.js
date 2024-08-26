const express = require("express");
const app = express();
const morgan = require("morgan"); //Import of Morgan library

//Import of ArticlesRoutes
const articlesRoutes = require("./api/routes/articles");
//Import of Category
const categoryRoutes = require("./api/routes/categories");
//Import of users
const usersRoutes = require("./api/routes/users");

//Use in MidleWhere
app.use(morgan("dev"));

//Use in MidleWhere of headers
//All the settings of the middleware that we have defined here on the server are
//designed so that the server knows how to handle the requests sent to it from the client
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); //Allows the client to reach any path he wants
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authoriztion" //Here I define what I allow the Client to add in his request -  Content-Type, Accept, Authoriztion
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET"); // Allows you to perform the following actions: PUT, POST, PATCH, DELETE, GET
    return res.status(200).json({});
  }
  next(); //Move to the next (by next parameter)
});

app.use(express.json()); //We can get the json data from client by using of express MidleWhere
//We can get the X-WWW-FORM-URLENCODED data from client by using of express MidleWhere
app.use(
  express.urlencoded({
    extended: false,
  })
);

//Routes
//Every time a user refers to articles, he will receive articlesRoutes
app.use("/articles", articlesRoutes);
app.use("/categories", categoryRoutes);
app.use("/users", usersRoutes);

//Another Middleware - Handling a situation where you try to access a path that does not exist
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error); //Move it to the nxet Middleware
});

//Another Middleware that gets the previous error
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
