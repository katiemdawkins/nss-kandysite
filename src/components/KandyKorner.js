import React from "react"
import { LocationsList } from "./locations/LocationsList"
import { ProductList } from "./products/ProductList"
import "./KandyKorner.css"

export const KandyKorner = () => {
    return (
        <>
            <h1>Kandy Korner</h1>

            <h2>Our Locations</h2>
            <LocationsList />

            <h2>Our Products</h2>
            <ProductList />
        </>
    )
}

//this module or component? contains the function that displays all html for the site