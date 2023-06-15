import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"

export default function Sidebar({isOpen, handleOnToggle}) {

  function changeSidebar(isOpen){
    handleOnToggle(isOpen)
  }

  return (
    <section className={`sidebar ${isOpen}`}>
      <div className="wrapper">
        <button className="toggle-button button closed">
          <i className="material-icons md-48" onClick={() => changeSidebar(isOpen)}>arrow_forward</i>
        </button>
        <div className="shopping-cart">
          <div className="cart-icons">
            <span className="cart-icon icon button">
              <i className="material-icons md-48" onClick={() => changeSidebar(isOpen)}>add_shopping_cart</i>
            </span>
            <span className="cart-icon icon button">
              <i className="material-icons md-48" onClick={() => changeSidebar(isOpen)}>monetization_on</i>
            </span>
            <span className="cart-icon icon button">
              <i className="material-icons md-48" onClick={() => changeSidebar(isOpen)}>fact_check</i>
            </span>
          </div>
        </div>
        <ShoppingCart isOpen={isOpen}/>
      </div>
    </section>
  )
}
