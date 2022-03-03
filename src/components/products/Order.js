import React, { useState, useEffect} from "react";
import "./MyOrders.css"

export const MyOrder = () => {
    const [customerPurchases, getCustomerPurchases] = useState([])

    useEffect (
        () =>{
            fetch("http://localhost:8088/customerPurchases?_expand=product&_expand=location&_expand=customer")
            .then(res => res.json())
            .then(
                (data) =>{
                    getCustomerPurchases(data)
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

