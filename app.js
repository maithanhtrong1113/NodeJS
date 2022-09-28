const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "shop.html"));
});

app.use("/admin", adminRoutes);

app.use((req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000);
