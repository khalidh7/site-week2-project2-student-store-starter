import * as React from "react"
import "./OrdersGrid.css"


export default function OrdersGrid({orders, products, remove, add, cart}){
    return(
        <div className="orders">
            <div className="content">
                <h2>Past Orders</h2>
                {orders?
                    <table className="table">
                        <tr className="cart-header">
                            <th className="id">Id</th>
                            <th className="name">Name</th>
                            <th className="date">Date</th>
                            <th className="total">Total</th>
                            <th className="view">View</th>
                        </tr>

                        {orders.map(item => {
                            return(
                                <tr className="cart-body">
                                    <td >{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.date}</td>
                                    <td>${(item.total)}</td>
                                    <td><a href={`/orders/${item.id}`}><button className="view-button">View</button></a></td>
                                </tr>
                                
                            )
                        })}
                    </table>
                    : <div className="notification">No Past Orders!</div>}
            </div>
        </div>
    )
}