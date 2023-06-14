import * as React from "react"
import "./Navbar.css"
import {  Link } from "react-router-dom";
import logo from './logo.svg';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="items">
        <div className="logo">
          <a href="/"><img src={logo}/></a>
        </div>
        <ul className="links">
          <a href="/" className="i-link"><li>Home</li></a>
          <a href="/#products" className="i-link"><li>Products</li></a>
          <a href="/#about" className="i-link"><li>About Us</li></a>
          <a href="/#contact" className="i-link"><li>Contact Us</li></a>
        </ul>
      </div>
    </nav>
  )
}
