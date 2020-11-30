import React, { useContext, useEffect } from "react"
import { LocationContext } from "../Location/LocationProvider"
import { Employee } from "./Employee"
import { EmployeeContext } from "./EmployeeProvider"
import { Link } from "react-router-dom"

export const EmployeeList = (props) => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)
  

  useEffect(
    () => {
        
    //   console.log("EmployeeList: Initial render before data")
      getEmployees()
    },
    []
  )

  return (
    <div className="employees">
        <h1>Employees</h1>
        <button onClick={() => props.history.push("/employees/create")}>
            Add Employee
        </button>
        <article className="employeeList">
        {
                    employees.map(employee => {
                        return <Link key={employee.id} to={`/employees/${employee.id}`}>
                            <h3>{employee.name}</h3>
                        </Link>
                    })
                }
            </article>
        </div>
    )
}