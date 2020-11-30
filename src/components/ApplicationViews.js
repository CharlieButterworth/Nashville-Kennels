import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./Location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationList } from "./Location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./Customer/CustomerProvider"
import { CustomerList } from "./Customer/CustomerList"
import { EmployeeProvider } from "./Employee/EmployeeProvider"
import { EmployeeList } from "./Employee/EmployeeList"
import { EmployeeForm } from "./Employee/EmployeeForm"
import { AnimalForm } from "./animal/AnimalForm"

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

           
           
           
           
           {/* HERE ARE THE ANIMALS */}
           
           
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route exact path="/animals" render={
                    props => <AnimalList {...props} />
                } />
                <Route exact path="/animals/create" render={
                    props => <AnimalForm {...props} />
                } />
                    
                 </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

           
           
           
           
           
            <CustomerProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>




            {/* CREATE NEW EMPLOYEE */}

            <EmployeeProvider>
                <LocationProvider>
                <AnimalProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route exact path="/employees" render={
                    props => <EmployeeList {...props} />
                } />
                <Route exact path="/employees/create" render={
                    props => <EmployeeForm {...props} />
                } />
                    </AnimalProvider>
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}