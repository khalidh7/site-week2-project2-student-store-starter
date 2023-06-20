const data = require("./db.json");

const productSchema = {
  id: Number,
  name: String,
  image: String,
  source: String,
  description: String,
  price: Number,
};

const purchaseSchema = {
  id: Number,
  name: String,
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
