import * as React from "react"
import { useState, useEffect } from 'react'
import Navbar from "../Navbar/Navbar"
import ProductView from "../ProductView/ProductView"
import "./ProductDetail.css"
import { useParams } from 'react-router-dom'


export default function ProductDetail({products}){
    console.log()
    const {productId} = useParams()
    const [filtered, setFiltered] = useState([])
    
    useEffect(() => {
        setFiltered(products.filter(product => product.id == productId))
    }, [filtered])
    
    
    return(
        <>
            <Navbar/>
            <div className="product-detail">
            {filtered?.map(element =>
                <ProductView 
                product={filtered[0]}
                />)
            }
            </div>
        </>
        )
}