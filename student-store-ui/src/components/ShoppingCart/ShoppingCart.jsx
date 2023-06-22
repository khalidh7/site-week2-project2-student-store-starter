import React from "react";
import "./ShoppingCart.css"
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function ShoppingCart({isOpen, cart, products, change, submit, checkout, text, total, setTotal}){
    let subtotal = 0;
   
    return(
        <div className="shopping-cart">
            <div className={`${isOpen}`}>
                <h3 className="">
                    Shopping Cart 
                    <span className="button">
                        <i className="material-icons md-48">add_shopping_cart</i>
                    </span>
                </h3>
                {cart?
                    <table className="table">
                        <tr className="cart-header">
                            <th className="name">Name</th>
                            <th className="quantity">Quantity</th>
                            <th className="unit-price">Unit Price</th>
                            <th className="price">Price</th>
                        </tr>
                        {cart.map(item => {
                            const unitprice = products[item.id - 1].price
                            const price = unitprice * item.quantity
                            subtotal += price;
                            return(
                                <tr className="cart-body">
                                    <td>{products[item.id - 1].name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{unitprice.toFixed(2)}</td>
                                    <td>{price.toFixed(2)}</td>
                                </tr>
                            )
                        })}
                        {
                            
                            <tr className="cart-totals">
                                <td className="subtotal">Subtotal: ${subtotal.toFixed(2)}</td>
                                <td className="taxes">Taxes: ${(subtotal*0.09).toFixed(2)}</td>
                                {setTotal(subtotal+(subtotal*0.09))}
                                <td className="total">Total: ${total.toFixed(2)}</td>
                            </tr>
                            
                        }
                    </table>
                    : <div className="notification">No items added to cart yet. Start shopping now!</div>}
                <CheckoutForm change={change} submit={submit} checkout={checkout} products={products}/>
                <div className="checkout-success">
                    <h3>Checkout Info <span className="icon button"><i className="material-icons md-48">fact_check</i></span></h3>
                    <div className="content">
                        {<p>{text}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}