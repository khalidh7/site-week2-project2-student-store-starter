const fs = require("fs");
let myObject = fs.readFileSync("./data/db.json", "utf8");
let data = JSON.parse(myObject);
let products = data.products;
let purchases = data.purchases;

const productSchema = {
  id: Number,
  name: String,
  image: String,
  source: String,
  description: String,
  price: Number,
};

const purchaseSchema = {
  name: String,
  id: Number,
};

const dataModel = {
  getAll: () => {
    return products;
  },
  getById: (id) => {
    return products.find((user) => user.id === id);
  },
  create: (order) => {
    const orderId = purchases.length + 1;
    const newOrder = { ...order, id: orderId };
    purchases.push(newOrder);
    return newOrder;
  },
};

module.exports = dataModel;
