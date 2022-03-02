import React, { useState, useEffect} from "react";

export const MyOrder = () =>{ 
    const [orders, setOrder]= useState([])

    useEffect(
        () =>{
            fetch("http://localhost:8088/customerPurchases?_expand=product&_expand=location&_expand=customer")
            .then(res => res.json())
            .then ((data) => {
                setOrder(data)
            })
        },
        []
    )

    return (
        <>
            {
                orders.map(
                    (order) =>{
                        return (
                        <>
                            <h4>Order number: {order.id}</h4>
                                <div key={`order--${order.id}`}>
                                    <p>{order.customer.name} purchased {order.product.candyName} on {order.date}</p>
                                </div>
                        </>
                        )
                    }
                )
            }
        </>
    )
}