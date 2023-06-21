import * as React from "react"
import "./ProductView.css"
import Navbar from "../Navbar/Navbar"
export default function ProductView({product, cart, remove, add}){
    let temp =cart.find(item => item.id == product.id)

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
                        <button onClick={()=>{add(product.id)}}>✅</button>
                        <button onClick={()=>remove(product.id)}>❌</button>
                    </div>
                    <div className="quantity">
                        <div className="content">
                            {temp? temp.quantity : 0}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}