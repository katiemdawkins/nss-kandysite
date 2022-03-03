import React, { useState, useEffect} from "react";
import { getAllCustomers } from "../ApiManager";

export const CustomerList = () =>{ 
    const [customers, setCustomers]= useState([])

    useEffect(
        () =>{
            getAllCustomers()
            .then (
                (customers) => {
                setCustomers(customers)
            })
        },
        []
    )

    return (
        <>
            {
                customers.map(
                    (customer) =>{
                        return <div key={`customer--${customer.id}`}>
                                <p>{customer.name}</p>
                            </div>
                    }
                )
            }
        </>
    )
}