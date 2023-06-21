import * as React from "react"
import "./Home.css"
import { useState, useEffect } from "react"
import ProductGrid from "../ProductGrid/ProductGrid"
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import Sidebar from "../Sidebar/Sidebar"


export default function Home({products, isOpen, handleOnToggle, arrow, remove, add, cart, change, submit, checkout}) {
  const [filtered, setFiltered] = useState(products);
  const [cat, setCat] = useState('')


  useEffect(() => {setFiltered(products)}, [products])

  function filterresults(cat){
    setCat(cat);
    setFiltered(products.filter(product => product.category.includes(cat)))
  }

  function searchresults(input){
    if (cat.length > 0) {
      setFiltered(
        products
        .filter(product => product.category.includes(cat))
        .filter(product => product.name.toLowerCase().includes(input))
      )
    }
    else {
      setFiltered(products.filter(product => product.name.toLowerCase().includes(input)))
    }
  }

  return (
    <>
      <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle} arrow={arrow} cart={cart} products={products} change={change} submit={submit} checkout={checkout}/>    
      <Navbar/>
      <Hero/>
      <div className="home">
        <div className="subnav">
          <div className="content">
            <div className="row">
              <div className="search-bar">
                <input type="text" name="search" placeholder="Search" onChange={(event) => {searchresults(event.target.value.toLowerCase())}}/>
              </div>
              <div className="cart">
                <a href="/">My Cart</a>
              </div>
            </div>
            <div className="row">
              <ul className="category-menu">
                <li className="is-active">
                  <button onClick={() => {setFiltered(products); setCat('')}}>All Categories</button>
                </li>
                <li className="">
                  <button onClick={() => {filterresults('clothing')}}>Clothing</button>
                </li>
                <li className="">
                  <button onClick={() => {filterresults('food')}}>Food</button>
                </li>
                <li className="">
                  <button onClick={() => {filterresults('accessories')}}>Accessories</button>
                </li>
                <li className="">
                  <button onClick={() => {filterresults('tech');}}>Tech</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ProductGrid products={filtered} remove={remove} add={add} cart={cart}/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    </>  
  )
}
