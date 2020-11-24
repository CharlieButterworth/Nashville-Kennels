import React from "react"
import { Animal } from "./animal/Animal"
import { Customer } from "./Customer/Customer"
import { Employee } from "./Employee/Employee"
import { Location } from "./Location/Location"
import "./Kennel.css"

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
        </article>

        <h2>Employees</h2>
        <div className="employees">
        <Employee />
        <Employee />
        </div>

        <h2>Locations</h2>
        <div className="locations">
        <Location />
        <Location />
        </div>

        
        <h2>Customers</h2>
        <div className="customers">
        <Customer />
        <Customer />
        <Customer />
        <Customer />
        </div>




    </>
)