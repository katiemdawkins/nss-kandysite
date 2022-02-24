import React, { useEffect, useState } from "react"
import "./Locations.css"

export const LocationsList = () => {
    const [locations, setLocations] = useState([])

    useEffect(
        ()=>{
            fetch ("http://localhost:8088/locations")
            .then (res => res.json())
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