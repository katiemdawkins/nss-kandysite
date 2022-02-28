import React, { useState, useEffect} from "react";

export const CustomerList = () =>{ 
    const [customers, setCustomers]= useState([])

    useEffect(
        () =>{
            fetch("http://localhost:8088/customers")
            .then(res => res.json())
            .then ((data) => {
                setCustomers(data)
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