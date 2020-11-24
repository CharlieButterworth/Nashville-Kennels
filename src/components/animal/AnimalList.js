import { Animal } from "./Animal"
import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../Location/LocationProvider"
import { CustomerContext } from "../Customer/CustomerProvider"





export const AnimalList = () => {
    // This state changes when `getLocations()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        getLocations()
        .then(getCustomers)
        .then(getAnimals)
    }, 
    []
    )

   

    return (
        <div className="animals"> 
            {
            animals.map(animal => {
                const owner = customers.find(c => c.id === animal.customerId)
                const clinic = locations.find(l => l.id === animal.locationId)
            
           return <Animal key={animal.id} location={clinic} customer={owner} animal={animal} />
            })
        }   
            </div>
            
        )
        
    }