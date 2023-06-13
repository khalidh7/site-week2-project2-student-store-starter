import * as React from "react"
import "./ProductCard.css"

export default function ProductCard({product}){
    return(
        <>
            <div className="product-image">
                <img src={product.image} alt={`Picture of ` + product.name}/>
            </div>
            <div className="product-bottom">
                <div className="product-text">
                    <p className="product-name">{product.name}</p>
                    <p className="product-rating">⭐⭐⭐⭐⭐</p>
                    <p className="product-price">{product.price}</p>
                </div>
                <div className="product-add">
                    <button>✅</button>
                    <button>❌</button>
                </div>
            </div>
        </>
    )
}