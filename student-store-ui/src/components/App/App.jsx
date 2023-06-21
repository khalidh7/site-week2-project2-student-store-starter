import * as React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import "./App.css"
import axios from "axios"
import { useEffect, useState } from "react"

export default function App() {
  const [products, setProducts] = useState([]);
  const url = "http://localhost:3001/store"
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState(null)
  const [isOpen, setIsOpen] = useState("closed")
  const [arrow, setArrow] = useState("arrow_forward")
  const [shoppingCart, setShoppingCart] = useState([])
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
    // switch(name){
    //   case "name":
    //     console.log("name")
    //     setCheckoutForm({...checkoutForm, name: value});
    //   case "email":
    //     console.log('email')
    //     setCheckoutForm({...checkoutForm, email: value});
    //   case "shoppingCart":
    //     console.log("form")
    //     setCheckoutForm({...checkoutForm, shoppingCart: value});
    // }
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
    if(checkoutForm.name != "" && checkoutForm.email != "" && checkoutForm.shoppingCart != []){ 
      axios.post("http://localhost:3001/purchase", checkoutForm)
        .then(response => {
          console.log(response)
        })
      console.log(checkoutForm)
      setShoppingCart([])
      setCheckoutForm({})
    }
    else{
      return(<alert>Please Make Sure Name/Email/Shopping Cart are not Empty</alert>)
    }
  }


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home products={products} isOpen={isOpen} handleOnToggle={handleOnToggle} arrow={arrow} remove={removeFromCart} add={addToCart} cart={shoppingCart} change={handleOnCheckoutFormChange} submit={handleOnCheckoutFormSubmit} checkout={checkoutForm}/>}/>
          <Route path="/products/:productId" element={<ProductDetail products={products} cart={shoppingCart} remove={removeFromCart} add={addToCart}/>} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
