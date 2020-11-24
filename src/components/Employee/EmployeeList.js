import React, { useContext, useEffect } from "react"
import { LocationContext } from "../Location/LocationProvider"
import { Employee } from "./Employee"
import { EmployeeContext } from "./EmployeeProvider"


export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)

  useEffect(
    () => {
        getLocations()
    //   console.log("EmployeeList: Initial render before data")
      .then(getEmployees)
    },
    []
  )

  return (
    <div className="employees">
      {
        employees.map(employee => {
            const clinic = locations.find(l => l.id === employee.locationId)
            
            
            return <Employee key={employee.id} location={clinic} employee={employee} />
        })
      }
    </div>
  )
}