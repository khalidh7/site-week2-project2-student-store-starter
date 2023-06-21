// YOUR CODE HERE
const express = require("express");
const cors = require("cors");
const app = express();
const dataModel = require("../models/products.js");

app.use(cors());

app.get("/store", (req, res) => {
  const products = dataModel.getAll();
  res.json(products);
});

app.get("/store/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = dataModel.getById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: `Product with ${id} not found` });
  }
});

app.post("/purchase", (req, res) => {
  const order = req.body;
  console.log(order);
  const newOrder = dataModel.create(order);
  console.log(newOrder);
  res.status(201).json(newOrder);
});

module.exports = app;
