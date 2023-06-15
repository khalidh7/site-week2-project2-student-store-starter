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
  const url = "https://codepath-store-api.herokuapp.com/store"
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState(null)
  const [isOpen, setIsOpen] = useState("closed")
  const [arrow, setArrow] = useState("arrow_forward")

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


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home products={products} isOpen={isOpen} handleOnToggle={handleOnToggle} arrow={arrow}/>}/>
          <Route path="/products/:productId" element={<ProductDetail products={products}/>} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
