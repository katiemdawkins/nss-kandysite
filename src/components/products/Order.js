import React, { useState, useEffect} from "react";
import "./MyOrders.css"
import { getAllOrders } from "../ApiManager";

export const MyOrder = () => {
    const [customerPurchases, getCustomerPurchases] = useState([])

    useEffect (
        () =>{
            getAllOrders()
            .then(
                (orders) =>{
                    getCustomerPurchases(orders)
                }
            )
        },
        []
    )

    return(
        <>
            {
                customerPurchases.map(
                    (purchase)=>{
                        if(purchase.customerId === parseInt(localStorage.getItem("kandy_customer"))){
                           return <div key={`purchase--${purchase.id}`}>
                                    <h3>{purchase.customer.name}, here's your order...</h3>
                                    <p>{purchase.product.candyName}: ${purchase.product.price}</p>
                           </div>
                        }

                    }
                )
            }
        </>
    )
}

