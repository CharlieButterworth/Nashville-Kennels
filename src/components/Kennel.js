import React from "react"
import { Animal } from "./animal/Animal"
import { Customer } from "./Customer/Customer"
import { Employee } from "./Employee/Employee"
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
            <Animal />
            <Animal />
            <Animal />
            <Animal />
        </article>

        <h2>Employees</h2>
        <div className="employees">
        <Employee />
        <Employee />
        </div>

        <h2>Locations</h2>
        <LocationProvider>
        <LocationList />
        </LocationProvider>
        
        <h2>Customers</h2>
        <div className="customers">
        <Customer />
        <Customer />
        <Customer />
        <Customer />
        </div>




    </>
)