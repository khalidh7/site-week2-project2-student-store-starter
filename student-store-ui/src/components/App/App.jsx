import * as React from "react"
import { BrowserRouter} from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import axios from "axios"
import { useEffect, useState } from "react"

export default function App() {
  const [products, setProducts] = useState();
  const url = "https://codepath-store-api.herokuapp.com/store"

  useEffect(() => {
    axios.get(url).then(response => {
      setProducts(response.data.products);
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar/>
          <Sidebar/>
          <Home products={products}/>
        </main>
      </BrowserRouter>
    </div>
  )
}
