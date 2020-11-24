import React from "react"
import { Animal } from "./animal/Animal"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerList } from "./Customer/CustomerList"
import { CustomerProvider } from "./Customer/CustomerProvider"
import { EmployeeList } from "./Employee/EmployeeList"
import { EmployeeProvider } from "./Employee/EmployeeProvider"
import "./Kennel.css"
import { LocationList } from "./Location/LocationList"
import { LocationProvider } from "./Location/LocationProvider"

// This is a single line function. It is not returning HTML. It is JSX

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalProvider >
            <AnimalList />
            </AnimalProvider>
            
        </article>

        <h2>Employees</h2>
        <EmployeeProvider>
        <EmployeeList />
        </EmployeeProvider>
        

        <h2>Locations</h2>
        <LocationProvider>
        <LocationList />
        </LocationProvider>
        
        <h2>Customers</h2>
        <div className="customers">
        <CustomerProvider >
        <CustomerList />
        </CustomerProvider>
    
        </div>




    </>
)