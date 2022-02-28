import React, { useState, useEffect} from "react";

export const EmployeeList = () =>{ 
    const [employees, setEmployee]= useState([])

    useEffect(
        () =>{
            fetch("http://localhost:8088/employees?_expand=location")
            .then(res => res.json())
            .then ((data) => {
                setEmployee(data)
            })
        },
        []
    )

    return (
        <>
            {
                employees.map(
                    (employee) =>{
                        return <div key={`employee--${employee.id}`}>
                                <p>{employee.name} works at {employee.location.name}</p>
                            </div>
                    }
                )
            }
        </>
    )
}