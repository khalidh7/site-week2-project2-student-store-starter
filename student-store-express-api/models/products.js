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
    let total = 0;
    const date = new Date().toUTCString().slice(5, 16);
    for (item in shoppingCart) {
      console.log(item);
      const product = products.find((product) => product.id === item.id);
      console.log(product);
      // const quantity = item.quantity;
      // const price = product.price;
      // let producttotal = quantity * price;
      // total += producttotal;
    }
    const newOrder = { id: orderId, date: date, ...order };
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
