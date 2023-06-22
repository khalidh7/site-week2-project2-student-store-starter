import * as React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import Orders from "../Orders/Orders";
import "./App.css"
import axios from "axios"
import { useEffect, useState } from "react"
import OrdersView from "../OrdersView/OrdersView";

export default function App() {
  const [products, setProducts] = useState([]);
  const url = "http://localhost:3001/store"
  const [orders, setOrders] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState(null)
  const [isOpen, setIsOpen] = useState("closed")
  const [arrow, setArrow] = useState("arrow_forward")
  const [shoppingCart, setShoppingCart] = useState([])
  const [purchaseText, setPurchaseText] = useState("")
  const [total, setTotal] = useState(0)
  const [checkoutForm, setCheckoutForm] = useState({
    name: "",
    email: "",
    shoppingCart: []
  })


  useEffect(() => {
    axios.get(url)
      .then(response => {
        setIsFetching(true);
        setProducts(response.data);

        if(!products){
          setError("No products fetched");
        }
      })
      .catch(err => {
        setIsFetching(false);
        setError(err);
      })
  }, []);


  useEffect(() => {
    axios.get('http://localhost:3001/orders')
      .then(response => {
        setIsFetching(true);
        setOrders(response.data);

        if(!orders){
          setError("No orders fetched");
        }
      })
      .catch(err => {
        setIsFetching(false);
        setError(err);
      })
  }, []);


  function handleOnToggle(isOpen){
    if(isOpen == "closed"){
      setArrow("arrow_backward")
      setIsOpen("open")
    }
    else if(isOpen =="open"){
      setArrow("arrow_forward")
      setIsOpen("closed")
    }
  }

  function addToCart(productId){
    let newItem;
    const item = shoppingCart.find(item => item.id == productId)
    if(item == null){
      newItem = {id: productId, quantity: 1}
      setShoppingCart(shoppingCart.concat(newItem))
    }
    else{
      newItem = [...shoppingCart]
      newItem.forEach(item => {
        if(item.id == productId){
          item.quantity += 1;
        }
      })
      setShoppingCart(newItem)
    }
    handleOnCheckoutFormChange("shoppingCart", shoppingCart)
  }

  function removeFromCart(productId){
    let newItem;
    const item = shoppingCart.find(item => item.id == productId)
    if(item.quantity > 0){
      newItem = [...shoppingCart]
      newItem.forEach((item) => {
        if(item.id == productId){
          item.quantity = item.quantity - 1;
        }
      })
      setShoppingCart(newItem)
    }
    if(item.quantity <= 0){
      let newlist = shoppingCart.filter(item => item.quantity > 0)
      setShoppingCart(newlist)
    }
    handleOnCheckoutFormChange("shoppingCart", shoppingCart)
  }
  
  function handleOnCheckoutFormChange(name, value){
    if (name == "name"){
      setCheckoutForm({...checkoutForm, name: value})
    }
    else if (name == "email"){
      setCheckoutForm({...checkoutForm, email: value})
    }
    else if (name == "shoppingCart"){
      setCheckoutForm({...checkoutForm, shoppingCart: value})
    }

    console.log(checkoutForm)
  }

  function handleOnCheckoutFormSubmit(){
    if(checkoutForm.name != "" && checkoutForm.email != "" && shoppingCart.length != 0){ 
      axios.post("http://localhost:3001/purchase", checkoutForm)
        .then(response => {
          console.log(response)
        })
      console.log(checkoutForm)
      setShoppingCart([])
      setCheckoutForm({})
      setPurchaseText(`Receipt
      Showing receipt for ${checkoutForm.name} available at ${checkoutForm.email}:\n     
              The total comes out to $${total.toFixed(2)}`)
      setTimeout(() => {setPurchaseText("")}, 10000)
    }
    else{
      alert("Please fill out all field and make sure you have items in your cart")
    }
  }


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home products={products} isOpen={isOpen} handleOnToggle={handleOnToggle} arrow={arrow} remove={removeFromCart} add={addToCart} cart={shoppingCart} change={handleOnCheckoutFormChange} submit={handleOnCheckoutFormSubmit} checkout={checkoutForm} text={purchaseText} total={total} setTotal={setTotal}/>}/>
          <Route path="/products/:productId" element={<ProductDetail products={products} cart={shoppingCart} remove={removeFromCart} add={addToCart}/>} />
          <Route path="/orders" element={<Orders products={products} orders={orders} isOpen={isOpen} handleOnToggle={handleOnToggle} arrow={arrow} remove={removeFromCart} add={addToCart} cart={shoppingCart} change={handleOnCheckoutFormChange} submit={handleOnCheckoutFormSubmit} checkout={checkoutForm} text={purchaseText} total={total} setTotal={setTotal}/>}/>
          <Route path="/orders/:orderId" element={<OrdersView products={products}/>} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
