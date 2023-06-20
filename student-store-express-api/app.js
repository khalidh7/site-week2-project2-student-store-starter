// YOUR CODE HERE
const express = require("express");
const cors = require("cors");
const router = express();
const dataModel = require("./data/products.js");

router.use(cors());

router.get("/store", (req, res) => {
  const products = dataModel.getAll();
  res.json(products);
});

router.get("/store/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = dataModel.getById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: `Product with ${id} not found` });
  }
});

router.post("/purchase", (req, res) => {
  const order = req.body;
  console.log(order);
  const newOrder = dataModel.create(order);
  console.log(newOrder);
  res.status(201).json(newOrder);
});

module.exports = router;
