import React from "react"
import { Route } from "react-router-dom"
import { EmployeeList } from "./employees/EmployeeList"
import { HiringForm } from "./employees/HiringForm"
import { LocationsList } from "./locations/LocationsList"
import { ProductList } from "./products/ProductList"
import { CustomerList } from "./customers/CustomerList"


//when a user clicks on a hyperlink in the nav bar this code dictates which component should be rendered 
export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">
                <h2>Our Locations</h2>
                <LocationsList />
            </Route>
            <Route path="/products">
                <h2>Our Products</h2>
                <ProductList />
            </Route>
            <Route exact path="/hiring">
                <HiringForm />
            </Route>
            <Route path="/hiring/employees">
                <EmployeeList />
            </Route>
            <Route path="/customers">
                <CustomerList />
            </Route>
        </>
    )
}