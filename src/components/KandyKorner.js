import React from "react"
import { Route } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import "./KandyKorner.css"

export const KandyKorner = () => {
    return (
        <>
            <NavBar />
            <h1>Kandy Korner</h1>
            <ApplicationViews />
            
        </>
    )
}

//this module or component? contains the function that displays all html for the site