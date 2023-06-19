import React from "react";
import "./ShoppingCart.css"

export default function ShoppingCart({isOpen, cart, products}){
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
                            return(
                                <tr className="cart-body">
                                    <td>{products[item.id - 1].name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{unitprice}</td>
                                    <td>{price}</td>
                                </tr>
                            )
                        })}
                    </table>
                    : <div className="notification">No items added to cart yet. Start shopping now!</div>}
                <div className="checkout-form">
                    <h3 className="">
                        Payment Info 
                        <span className="button">
                            <i className="material-icons md-48">monetization_on</i>
                        </span>
                    </h3>
                <div className="input-field">
                    <label className="label">Name</label>
                    <div className="control ">
                        <input name="name" className="checkout-form-input" type="text" placeholder="Student Name" value=""/>
                    </div>
                </div>
                <div className="input-field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input name="email" className="checkout-form-input" type="email" placeholder="student@codepath.org" value=""/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label className="checkbox">
                            <input className="termsAndConditions" type="checkbox"/>
                            <span className="label">I agree to the <a href="#terms-and-conditions">terms and conditions</a></span>
                        </label>
                    </div>
                </div>
                <p className="is-danger"></p>
                <div className="field">
                    <div className="control">
                        <button className="button checkout-button">Checkout</button>
                    </div>
                </div>
            </div>
            <div className="checkout-success">
                <h3>Checkout Info <span className="icon button"><i className="material-icons md-48">fact_check</i></span></h3>
                <div className="content">
                    <p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.</p>
                </div>
            </div>
        </div>
    </div>
    )
}