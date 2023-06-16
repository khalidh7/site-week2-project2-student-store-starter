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


export default function Home({products, isOpen, handleOnToggle, arrow, remove, add, cart}) {
  const [filtered, setFiltered] = useState(products);
  const [cat, setCat] = useState('')


  useEffect(() => {setFiltered(products)}, [products])

  function filterresults(){
    setFiltered(products.filter(product => product.category.includes(cat)))
    console.log(products);
  }

  function searchresults(input){
    setFiltered(filtered.filter(product => product.name.toLowerCase().includes(input)))
  }

  return (
    <>
      <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle} arrow={arrow}/>    
      <Navbar/>
      <Hero/>
      <div className="home">
        <div className="subnav">
          <div className="content">
            <div className="row">
              <div className="search-bar">
                <input type="text" name="search" placeholder="Search" onChange={(event) => {filterresults(cat); console.log(filtered); searchresults(event.target.value.toLowerCase())}}/>
              </div>
              <div className="cart">
                <a href="/">My Cart</a>
              </div>
            </div>
            <div className="row">
              <ul className="category-menu">
                <li className="is-active">
                  <button onClick={() => {setFiltered(products)}}>All Categories</button>
                </li>
                <li className="">
                  <button onClick={() => {setCat('clothing'); filterresults()}}>Clothing</button>
                </li>
                <li className="">
                  <button onClick={() => {setCat('food'); filterresults()}}>Food</button>
                </li>
                <li className="">
                  <button onClick={() => {setCat('accessories'); filterresults()}}>Accessories</button>
                </li>
                <li className="">
                  <button onClick={() => {setCat('tech'); filterresults()}}>Tech</button>
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
