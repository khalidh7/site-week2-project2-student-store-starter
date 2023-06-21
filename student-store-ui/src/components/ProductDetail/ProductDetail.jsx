import * as React from "react"
import { useState, useEffect } from 'react'
import Navbar from "../Navbar/Navbar"
import ProductView from "../ProductView/ProductView"
import "./ProductDetail.css"
import axios from "axios"
import { useParams } from 'react-router-dom'


export default function ProductDetail({products, cart, remove, add}){
    const [filteredList, setFilteredList] = useState([products])
    const {productId} = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3001/store/${productId}`)
          .then(response => {
            setProduct(response.data);
          })
      }, []);
    
    
    
    return(
        <>
            <Navbar/>
            <div className="product-detail">
                <ProductView 
                product={product} cart={cart} remove={remove} add={add}
                />
            </div>
        </>
        )
}