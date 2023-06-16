import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard";


export default function ProductGrid({products, remove, add, cart}){
    return(
        <div id="products" className="product-grid">
            <div className="content">
                <h2>Best Selling Products</h2>
                <div className="grid">
                    {products?.map(element =>
                        <ProductCard 
                        product={element} remove={remove} add={add} cart={cart}
                        />)
                    }
                </div>
            </div>
        </div>
    )
}