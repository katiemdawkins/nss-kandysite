import React from "react"

export const getAllEmployees = () =>{
    return fetch("http://localhost:8088/employees?_expand=location")
        .then(res => res.json())
}

export const fireEmployee = (id) => {
    return fetch (`http://localhost:8088/employees/${id}`, {
        method: "DELETE"
    })
}

export const getAllCustomers = () => {
    return fetch("http://localhost:8088/customers")
        .then(res => res.json())
}

export const getAllProducts = () => {
    return  fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId&_order=desc")
        .then( res => res.json())
}

export const getAllOrders = () => {
    return fetch("http://localhost:8088/customerPurchases?_expand=product&_expand=location&_expand=customer")
        .then(res => res.json())
}

export const getAllLocations = () => {
    return fetch ("http://localhost:8088/locations")
        .then (res => res.json())
}