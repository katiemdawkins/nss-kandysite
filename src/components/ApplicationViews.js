import React from "react"
import { Route } from "react-router-dom"
import { LocationsList } from "./locations/LocationsList"
import { ProductList } from "./products/ProductList"


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
        </>
    )
}