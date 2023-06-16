import * as React from "react"
import { useState, useEffect } from 'react'
import Navbar from "../Navbar/Navbar"
import ProductView from "../ProductView/ProductView"
import "./ProductDetail.css"
import { useParams } from 'react-router-dom'


export default function ProductDetail({products}){
    const {productId} = useParams()
    const [filteredList, setFilteredList] = useState([])
    
    useEffect(() => {
        setFilteredList(products.filter(product => product.id == productId))
    }, [filteredList])
    
    
    
    return(
        <>
            <Navbar/>
            <div className="product-detail">
            {filteredList?.map(element => 
                <ProductView 
                product={filteredList[0]}
                />)
            }
            </div>
        </>
        )
}