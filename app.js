const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const app = express();

//  Templating Engines
app.set("view engine", "ejs");
app.set("views", "views");
// config bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
// config bodyParser static file
app.use(express.static(path.join(__dirname, "public")));

// show view
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "shop.html"));
});

app.use("/admin", adminRoutes);

app.use((req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000);
