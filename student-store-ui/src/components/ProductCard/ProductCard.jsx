import * as React from "react"
import "./ProductCard.css"

export default function ProductCard({product, remove, add, cart}){
    let temp = cart.find(item => {item.id == product.id})
    return(
        <div className="product-card">
            <div className="product-image">
                <a  href={`/products/${product.id}`}>
                    <img src={product.image} alt={`Picture of ` + product.name}/>
                </a>
            </div>
            <div className="product-bottom">
                <div className="product-text">
                    <p className="product-name">{product.name}</p>
                    <p className="product-rating">⭐⭐⭐⭐⭐</p>
                    <p className="product-price">${product.price}</p>
                </div>
                <div className="product-add">
                    <div className="buttons">
                        <button onClick={()=>{add(product.id)}}>✅</button>
                        <button onClick={()=>remove(product.id)}>❌</button>
                    </div>
                    <div className="quantity">
                        <div className="content">
                            {console.log(temp)}
                            {temp? temp.quantity : 0}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}