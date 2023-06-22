const fs = require("fs");
let myObject = fs.readFileSync("./data/db.json", "utf8");
let data = JSON.parse(myObject);
let products = data.products;

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
    const orderId = data.purchases.length + 1;
    const shoppingCart = order.shoppingCart;
    let subtotal = 0;
    let taxes = 0;
    let total = 0;
    const date = new Date().toUTCString().slice(5, 16);
    shoppingCart.map((item) => {
      const product = products.find((product) => product.id === item.id);
      subtotal += product.price * item.quantity;
      taxes += subtotal * 0.09;
    });
    total = subtotal + taxes;
    const newOrder = { id: orderId, date: date, total: total, ...order };
    data.purchases.push(newOrder);
    const updatedData = JSON.stringify(data);

    fs.writeFile("./data/db.json", updatedData, (err) => {
      if (err) {
        console.error("Error writing to JSON file:", err);
        return;
      }

      console.log("Data written to JSON file successfully.");
    });

    return newOrder;
  },
};

module.exports = dataModel;
