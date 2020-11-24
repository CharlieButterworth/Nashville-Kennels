
import React from "react"
import { Animal } from "./animal/Animal"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { ApplicationViews } from "./ApplicationViews"
import { Customer } from "./Customer/Customer"
import { CustomerList } from "./Customer/CustomerList"
import { CustomerProvider } from "./Customer/CustomerProvider"
import { Employee } from "./Employee/Employee"
import { EmployeeList } from "./Employee/EmployeeList"
import { EmployeeProvider } from "./Employee/EmployeeProvider"
import "./Kennel.css"
import { Location } from "./Location/Location"
import { LocationList } from "./Location/LocationList"
import { LocationProvider } from "./Location/LocationProvider"
import { NavBar } from "./nav/NavBar"

export const Kennel = () => (
  <>
    <NavBar />
    <ApplicationViews />
  </>
)