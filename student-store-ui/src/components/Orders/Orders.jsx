import React from "react";
import { useState, useEffect} from "react";
import Navbar from "../Navbar/Navbar"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import Sidebar from "../Sidebar/Sidebar"
import OrdersGrid from "../OrdersGrid/OrdersGrid";

export default function Orders({products, orders, isOpen, handleOnToggle, arrow, remove, add, cart, change, submit, checkout, text, total, setTotal}) {
    const [filteredO, setFilteredO] = useState();

    useEffect(() => {setFilteredO(orders)}, [orders])

    function searchresults(input){
      setFilteredO(orders.filter(order => order.email.toLowerCase().includes(input)))
    }
    return(
        <>
      <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle} arrow={arrow} cart={cart} products={products} change={change} submit={submit} checkout={checkout} text={text} total={total} setTotal={setTotal}/>    
      <Navbar/>
      <div className="orders">
        <div className="subnav">
          <div className="content">
            <div className="row">
              <div className="search-bar">
                <input type="text" name="search" placeholder="Search" onChange={(event) => {searchresults(event.target.value.toLowerCase())}}/>
              </div>
            </div>
          </div>
        </div>
        <OrdersGrid orders={filteredO} products={products} remove={remove} add={add} cart={cart}/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    </>  
        )
}