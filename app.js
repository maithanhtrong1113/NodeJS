const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const app = express();

// config Templating Engines
app.set("view engine", "ejs");
app.set("views", "views");
// config bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
// config bodyParser static file
app.use(express.static(path.join(__dirname, "public")));

// show view
const products = adminRoutes.products;
app.get("/", (req, res, next) => {
  res.render("shop", {
    products: products,
  });
});

app.use("/admin", adminRoutes.routes);

app.use((req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000);
