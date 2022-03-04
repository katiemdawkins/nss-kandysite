import React, { useState, useEffect} from "react";
import { getAllCustomers } from "../ApiManager";
import { getAllOrders } from "../ApiManager";

export const CustomerList = () =>{ 
    const [customers, setCustomers] = useState([])
    const [ orders, setOrders ] = useState([])

    const customerState = () => {
        getAllCustomers()
        .then(
            (customers) =>{
                setCustomers(customers)
            }
        )
    }

    useEffect(
        () =>{
            customerState()
        },
        []
    )

    const orderState = () => {
        getAllOrders()
        .then(
            (orders) => {
                setOrders(orders)
            }
        )
    }

    useEffect(
        ()=> {
           orderState()
        },
        []
    )

    
    
    return (
    
        <>
            {
                customers.map(
                    (customer => {
                        return <div key={`customer--${customer.id}`}>
                                <p>{customer.name}</p>
                        </div>
                    })
                    )
                }
        </>
    )
}

// //need to access the number of orders a customer has made 
// //filter through customers, match customer.id to order.customerId
// //push matches to empty array
// //count the array?

// let customerOrders = []
    
//     const foundCustomerPurchases = customers.filter(customerObj =>{
//        return customerObj.id === orders.customerId
//     })
//     foundCustomerPurchases.forEach(foundCustomerPurchaseObj=>{
//         customerOrders.push(foundCustomerPurchases)
//     })

//     console.log(customerOrders)


//ternary statement ? 

//if customer.id === customerId count?
//push to a new array and the count the new array?

//{orders.filter(order => order.customerId === customer.id)}

