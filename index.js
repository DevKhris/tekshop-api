let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let app = express();

let port = 3000;
app.get("/", (req, res) => {
  console.log(req.url);
  res.send("Tekshop API Endpoint");
});

app.get("/products", (req, res) => {
  console.log(req.url);
  res.send("Tekshop API Products Endpoint");
});

app.get("/product/{id}", (req, res) => {
  console.log(req.url);
  res.send("Tekshop API Products Endpoint");
});

app.get("/shopping-cart", (req, res) => {
  console.log(req.url);
  res.send("Tekshop API Shopping Cart Endpoint");
});

app.post("/checkout", (req, res) => {
  console.log(req.url);
  res.send("Tekshop API Checkout Endpoint");
});

app.listen(3000);
