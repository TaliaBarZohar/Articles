// const fetchData = () => {
//   const promise = new Promise((resolve, reject) => {
//    // setTimeout(() => {
//       resolve("Done!");
//     //}, 1500);
//   });
//   return promise;
// };

// setTimeout(() => {
//   console.log("Timer is done!");
//   fetchData()
//     .then((text) => {
//       console.log(text);
//       return fetchData();
//     })
//     .then((text2) => {
//       console.log(text2);
//     });
// }, 2000);

// console.log("Hello!");
// console.log("Hi!");

// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log(req);
// });
// server.listen(3000);

// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method, req.headers);
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>My Firs Page</title></head>");
//   res.write("<body><h1>Hello from my Node.js erver!</h1></body>");
//   res.write("</html>");
//   res.end();
// });
// server.listen(3000);

const http = require("http");
const app = require("./app");
const port = 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/Plain" });
  res.write("Hello from Talia");
  res.end();
});

server.listen(port);
