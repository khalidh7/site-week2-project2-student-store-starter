import React from "react";

export default function CheckoutForm({change, submit, checkout}){

    return(
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
                            <input name="name" className="checkout-form-input" type="text" placeholder="Student Name" onChange={(event) => {change("name", event.target.value)}}/>
                        </div>
                    </div>
                    <div className="input-field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input name="email" className="checkout-form-input" type="email" placeholder="student@codepath.org" onChange={(event) => {change("email", event.target.value)}}/>
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
                            <button className="button checkout-button" onClick={submit}>Checkout</button>
                        </div>
                    </div>
                </div>
    )
}