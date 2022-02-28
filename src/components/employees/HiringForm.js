import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import "./employees.css"
import Select from "react-select"

export const HiringForm = () => {
    const [form, updateForm] = useState({
        name: "",
        locationId: 1,
        manager: false,
        fullTime: false,
        hourlyRate: 15
    })

    const history = useHistory()

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

    const submitForm =(evt) =>{
        evt.preventDefault()

        const newForm = {
            name: form.name,
            locationId: parseInt(form.locationId),
            manager: form.manager,
            fullTime: form.fullTime,
            hourlyRate: form.hourlyRate
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newForm)
        }
        return fetch("http://localhost:8088/employees", fetchOption)
        .then (() => {
            history.push("/hiring/employees")
        })
    }

    return (
        <form className="hiringForm">
            <h2 className="hiringForm_title">New Employee Info</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Full Name:  </label>
                    <input 
                        onChange={
                            (evt) => {
                                const copy = {...form}
                                copy.name = evt.target.value
                                updateForm(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="First and Last Name"
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                <label htmlFor="location">Location: </label>
                    <select
                        onChange={
                            (evt) => {
                                const copy = {...form}
                                copy.locationId = evt.target.value
                                updateForm(copy)
                            }
                        }
                        required autoFocus
                        className="form-control"
                        placeholder="Select a location">
                        {locations.map((location) =>{
                            return <option key={location.id}>{location.id}</option>
                        })}
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager </label>
                    <input
                        onChange = {
                            (evt) => {
                                const copy = {...form}
                                copy.manager = evt.target.checked
                                updateForm(copy)
                            }
                        }
                        required autoFocus
                        type="checkbox"
                        className="form-control" />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">Full Time </label>
                    <input
                        onChange = {
                            (evt) => {
                                const copy = {...form}
                                copy.fullTime = evt.target.checked
                                updateForm(copy)
                            }
                        }
                        required autoFocus
                        type="checkbox"
                        className="form-control" />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly Rate: </label>
                    <input 
                         onChange={
                            (evt) => {
                                const copy = {...form}
                                copy.hourlyRate = evt.target.value
                                updateForm(copy)
                            }
                        }
                        required autoFocus
                        type="number"
                        className="form-control" />
                </div>
            </fieldset>
            <button onClick={submitForm} className="btn btn-primary">
                Submit Application
            </button>
        </form>
    )
}