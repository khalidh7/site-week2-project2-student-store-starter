import * as React from "react"
import "./ProductView.css"
import Navbar from "../Navbar/Navbar"
export default function ProductView({product}){
    return(
        <div className="product-view">
            <div className="product-image">
                <img src={product.image} alt={`Picture of ` + product.name}/>
            </div>
            <div className="product-bottom">
                <div className="product-text">
                    <p className="product-name">{product.name}</p>
                    <p className="product-rating">⭐⭐⭐⭐⭐</p>
                    <p className="product-price">${product.price}</p>
                    <p className="product-description">{product.description}</p>
                </div>
                <div className="product-add">
                    <div className="buttons">
                        <button>✅</button>
                        <button>❌</button>
                    </div>
                    <div className="quantity">
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}