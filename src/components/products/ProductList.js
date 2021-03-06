import { isStatement } from "@babel/types"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import "./Products.css"
import { getAllProducts, sendPurchase } from "../ApiManager"

export const ProductList = () => {
    const [products, setProducts] = useState([])
    const history = useHistory()

    //fetch products
    useEffect(
        ()=>{
           getAllProducts()
            .then(
                (products)=> {
                setProducts(products)
            })
            
        },
        []
    )


    //when a customer purchases an item, we need to create a new purchase object 
    const purchaseItem = (product) => {

        //purchase object
        const newPurchase = {
            customerId: parseInt(localStorage.getItem("kandy_customer")),
            locationId: 4,
            productId: product.id,
            date: ""
        }

    //posting the new purchase object in customerPurchases API
        sendPurchase(newPurchase)
            .then(()=>{
                history.push("/products")
            })

    }

    return (
        <>
            {
             products.map(
                (product) => {
                    return <div key ={`product--${product.id}`}>
                            <p>
                                {product.candyName}, {product.productType.typeOfCandy}: ${product.price}
                            </p>
                        <button 
                            onClick={ ()=> purchaseItem(product) } 
                            className="btn btn-primary">
                                Purchase
                        </button>
                     </div>
                }
            )
            }
        </>
    )
}









//useState and use effect are "hooks" aka functions, they are built in to react 

//Invoking useState sets up our App State. It returns an array.
    //It's argurment is an empty array
    //on the left side the variable will hold the state from the API, 
    //after the variable, there is a function that will modify state for the variable

    //useEffect is an event listener that doesn't look like the one we've seen in javascript
        //it takes 2 arguments- a function and an array
        //it says when state changes, run this code
            //for the one that starts on line 6 -fetch the data from the API, .then, .then an array comes back from API
                //invoke the function provided when we established state variable
                //takes a single argument, the array that came back from the API

    //the return contains the html inside of ()
    //we use "fragments" <></> to put children in the same component
    //bc jsx returns only one element, so it won't let you do something like multiple h1,h2 without the fragments

    //react needs a key attribute to show that each element is unique it is displayed like...
    // key={`name--${name.id}}
    //you do not neeed a ${} when inside >{}<