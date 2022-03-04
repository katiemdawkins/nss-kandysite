import React, { useEffect, useState } from "react"
import "./Locations.css"
import { getAllLocations } from "../ApiManager"

export const LocationsList = () => {
    const [locations, setLocations] = useState([])

    useEffect(
        ()=>{
            getAllLocations()
            .then ((locationsArray) =>{
                setLocations(locationsArray)
            })
        },
        []
    )

    return (
        <>
            {
                locations.map(
                    (location) => {
                        return <div className="locationBox" key={`location--${location.id}`}>
                                <p>{location.name}</p>
                            </div>
                    }
                )
            }
        </>
    )
}