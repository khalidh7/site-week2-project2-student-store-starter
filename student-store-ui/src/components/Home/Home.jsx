import * as React from "react"
import "./Home.css"
import { useState, useEffect } from "react"
import ProductGrid from "../ProductGrid/ProductGrid"
import Navbar from "../Navbar/Navbar"


export default function Home({products}) {

  function filterresults(cat){
    products = products.filter(product => product.category.includes(cat))
    console.log("it happened")
  }

  return (
    <>    
      <Navbar/>
      <div className="home">
        <div className="subnav">
          <div className="content">
            <div className="row">
              <div className="search-bar">
                <input type="text" name="search" placeholder="Search" value=""/>
              </div>
              <div className="links">
                <span className="help">Help</span>
                <div className="cart">
                  <a href="/">My Cart</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="hamburger-menu">
                <i className="material-icons">menu</i>
              </div>
              <ul className="category-menu">
                <li className="is-active">
                  <button onClick={() => {}}>All Categories</button>
                </li>
                <li className="">
                  <button onClick={() =>
                  {console.log('clothing');filterresults('clothing')}}>Clothing</button>
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
        <div className="products">
          <h2>Best Selling Products</h2>
          <ProductGrid products={products}/>
        </div>
        <div className="about">
          <h2>About our Store</h2>
          <div id="about-text">
            <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
            <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
            <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
          </div>
        </div>
        <div className="contact">
          <h2>Contact Us</h2>
          <div id="contact-text">
            <ul className="info">
              <li>
                <span className="label">Email: </span>
                <span>code@path.org</span>
              </li>
              <li>
                <span className="label">Phone: </span>
                <span>1-800-CODEPATH</span>
              </li>
              <li>
                <span className="label">Address: </span>
                <span>123 Fake Street, San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>  
  )
}
