import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import "./App.css"
import axios from "axios"
import { useEffect, useState } from "react"

export default function App() {
  const [products, setProducts] = useState([]);
  const url = "https://codepath-store-api.herokuapp.com/store"
  const [checkoutForm, setCheckoutForm] = useState()

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setIsFetching(true);
        setProducts(response.data.products);
        if(!products){
          setError("No products fetched");
        }
      })
      .catch(err => {
        setIsFetching(false);
        setError(err);
      })
  }, []);

  function handleOnToggle(){
    if(isOpen == false){
      setIsOpen(true)
    }
    else{
      setIsOpen(false)
    }
  }

  function handleAddItemToCart(productId){
    let item = products.filter(item => item.id == productId)
    if(item in shoppingCart){
      shoppingCart.item.quantity +=1
    }
    else{
      setShoppingCart({
        itemId: productId,
        quantity: 1
      })
    }
  }

  function handleRemoveItemFromCart(productId){

  }

  function handleOnCheckoutFormChange(name, value){

  }

  function handleOnSubmitCheckoutForm(user, shoppingCart){

  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home products={products}/>}/>
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
