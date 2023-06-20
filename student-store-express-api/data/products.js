const fs = require("fs");
let myObject = fs.readFileSync("./data/db.json", "utf8");
let data = JSON.parse(myObject);

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
    return data.products;
  },
  getById: (id) => {
    return data.products.find((user) => user.id === id);
  },
  create: (order) => {
    const orderId = data.purchases.length + 1;
    const newOrder = { order, id: orderId };
    data.purchases.push(newOrder);
    return newOrder;
  },
};

module.exports = dataModel;
