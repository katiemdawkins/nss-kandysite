import React, { useState, useEffect} from "react";

export const EmployeeList = () =>{ 
    const [employees, setEmployee]= useState([])


    const getState = () =>{
        fetch("http://localhost:8088/employees?_expand=location")
            .then(res => res.json())
            .then ((data) => {
                setEmployee(data)
            })
    }
    useEffect(
        () =>{
            getState()
        },
        []
    )

    const fireEmployee =(id) => {
        fetch(`http://localhost:8088/employees/${id}`, {
            method: "DELETE"
        })
       .then((data)=>{
           getState(data)
       })
    }

    return (
        <>
            {
                employees.map(
                    (employee) =>{
                        return <div key={`employee--${employee.id}`}>
                                <p>{employee.name} works at {employee.location.name}</p>
                                <button onClick={()=>{
                                    fireEmployee(employee.id)
                                }}>Fire Employee</button>
                            </div>
                    }
                )
            }
        </>
    )
}