import * as React from "react"
import "./Home.css"
import { useState, useEffect } from "react"
import ProductGrid from "../ProductGrid/ProductGrid"
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"


export default function Home({products}) {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {setFiltered(products)}, [products])

  function filterresults(cat){
    setFiltered(products.filter(product => product.category.includes(cat)))
  }

  function searchresults(input){
    setFiltered(products.filter(product => product.name.toLowerCase().includes(input)))
  }

  return (
    <>    
      <Navbar/>
      <Hero/>
      <div className="home">
        <div className="subnav">
          <div className="content">
            <div className="row">
              <div className="search-bar">
                <input type="text" name="search" placeholder="Search" onChange={(event) => searchresults(event.target.value.toLowerCase())}/>
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
                  <button onClick={() => filterresults('clothing')}>Clothing</button>
                </li>
                <li className="">
                  <button onClick={() => filterresults('food')}>Food</button>
                </li>
                <li className="">
                  <button onClick={() => filterresults('accessories')}>Accessories</button>
                </li>
                <li className="">
                  <button onClick={() =>filterresults('tech')}>Tech</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="products" id="products">
          <h2>Best Selling Products</h2>
          <ProductGrid products={filtered}/>
        </div>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    </>  
  )
}
