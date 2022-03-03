import React, { useState, useEffect} from "react";
import { getAllEmployees } from "../ApiManager";
import { fireEmployee } from "../ApiManager";

export const EmployeeList = () =>{ 
    const [employees, setEmployees]= useState([])


    const employeeState = () =>{
            getAllEmployees()
            .then (
                (employees) => {
                setEmployees(employees)
            })
    }
    useEffect(
        () =>{
            employeeState()
        },
        []
    )

    const fireTheTheif =(id) => {
        return fireEmployee(id)
            .then((data)=>{
            employeeState(data)
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
                                    fireTheTheif(employee.id)
                                }}>Fire Employee</button>
                            </div>
                    }
                )
            }
        </>
    )
}