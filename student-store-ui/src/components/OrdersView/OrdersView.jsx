import React from "react";
import { useState, useEffect} from "react";
import Navbar from "../Navbar/Navbar"
import axios from "axios";
import { useParams } from "react-router-dom";
import "./OrdersView.css"



export default function OrdersView({products}){
    const [order, setOrder] = useState({})
    const {orderId} = useParams()
    useEffect(() => {
        axios.get(`http://localhost:3001/orders/${orderId}`)
          .then(response => {
            setOrder(response.data);
          })
      }, []);
    
    
    return(
        <>
          <Navbar/>
          <div className="order-view">
              { order ?
                <div className="container">
                  <h1>Name: {order.name}</h1>
                  <h2>Email: {order.email}</h2>
                  <h2>Date that order was made: {order.date}</h2>
                  <h1>Total: ${(order.total)}</h1>
                  <h2>Items:</h2>
                  {
                    order.shoppingCart?.map(item => {
                      let product = products.find(product => product.id === item.id)
                      return(
                        <h3>{product.name} - {item.quantity}</h3>
                      )
                    })
                  } 
                </div>
                : <h1>Order not found</h1>}
          </div>
        </>
        )
}