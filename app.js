const express = require("express");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());

const app = express();

app.use("/", (req, res, next) => {
  res.send("<h1>Hello</h1>");
});
app.listen(3000);
