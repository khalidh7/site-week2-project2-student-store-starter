import * as React from "react"
import "./Product.css"

export default function Product(item){
    return(
        <>
            <div className="product-image">
                <img src={item.image} alt={`Picture of ` + item.name}/>
            </div>
            <div className="product-bottom">
                <div className="product-text">
                    <p className="product-name">{item.name}</p>
                    <p className="product-rating">⭐⭐⭐⭐⭐</p>
                    <p className="product-price">{item.price}</p>
                </div>
                <div className="product-add">
                    <p>✅</p>
                    <p>❌</p>
                </div>
            </div>
        </>
    )
}