import React, { useContext, useRef, useEffect } from "react"

import { LocationContext } from "../Location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"

import { Animal } from "./Animal"



export const AnimalForm = (props) => {
   
    const { locations, getLocations } = useContext(LocationContext)
    const { animals, getAnimals, addAnimals } = useContext(AnimalContext)
    


    const name = useRef(null)
    const location = useRef(null)
    const animal = useRef(null)
    const customer = useRef(null)

    useEffect(() => {
        getAnimals().then(getLocations)
     }, [])


    const constructNewAppointment = () => {

        const locationId = parseInt(location.current.value)
        const customerId = parseInt(localStorage.getItem("kennel_customer"))
        
            if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addAnimals({
                name: name.current.value,
                customerId,
                locationId
            })
            .then(() => props.history.push("/animals"))

        }

    }

    return (
        <form className="appointmentForm">
            <h2 className="appointmentForm__title">New Appointment</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Animal name: </label>
                    <input type="text" id="AnimalName" ref={name} required autoFocus className="form-control" placeholder="Pet name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="employeeLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            
            <button type="confirm"
                onClick={evt => {
                    
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewAppointment()
                }}
                className="btn btn-primary">
                Confirm Appointment
            </button>
        </form>
    )
}




