// YOUR CODE HERE
const express = require("express");
const cors = require("cors");
const app = express();
const dataModel = require("../models/products.js");
// const bodyParser = require("body-parser");

app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.get("/store", (req, res) => {
  const products = dataModel.getAllP();
  res.json(products);
});

app.get("/store/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = dataModel.getByIdP(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: `Product with ${id} not found` });
  }
});

app.get("/orders", (req, res) => {
  const orders = dataModel.getAllO();
  res.json(orders);
});

app.get("/orders/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const order = dataModel.getByIdO(id);
  if (order) {
    res.json(order);
  } else {
    res.json({ error: `Order with ${id} not found` });
  }
});

app.post("/purchase", (req, res) => {
  const order = req.body;
  const newOrder = dataModel.create(order);
  res.status(201).json(newOrder);
});

module.exports = app;
