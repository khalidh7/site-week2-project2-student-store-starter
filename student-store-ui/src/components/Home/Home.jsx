import * as React from "react"
import "./Home.css"
import { useState, useEffect } from "react"
import ProductCard from "./ProductCard"


export default function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch('https://codepath-store-api.herokuapp.com/store')
      .then(response => response.json())
      .then(response => setData(response.products))
  }, []);

  return (
    <div className="home">
      <div className="products">
        <h2>Best Selling Products</h2>
        {data?.map(element =>
        <ProductCard 
          image={element.image}
          name={element.name}
          price={element.price}
        />)}
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
  )
}
