import React, { useContext, useState, useRef, useEffect } from "react"

import { LocationContext } from "../Location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"





// export const AnimalForm = (props) => {
   
//     const { locations, getLocations } = useContext(LocationContext)
//     const { animals, updateAnimal, getAnimals, addAnimal } = useContext(AnimalContext)
    
//     const [amimal, setAnimal] = useState({})

//     const name = useRef(null)
//     const location = useRef(null)
//     const animal = useRef(null)
//     const customer = useRef(null)


//      const editMode = props.match.params.hasOwnProperty("animalId")

//     const handleControlledInputChange = (event) => {
//         /*
//             When changing a state object or array, always create a new one
//             and change state instead of modifying current one
//         */
//         const newAnimal = Object.assign({}, animal)
//         newAnimal[event.target.name] = event.target.value
//         setAnimal(newAnimal)
//     }
// }
//     /*
//         If there is a URL parameter, then the user has chosen to
//         edit an animal.
//             1. Get the value of the URL parameter.
//             2. Use that `id` to find the animal.
//             3. Update component state variable.
//     */
   
//    const getAnimalInEditMode = () => {
//        if (editMode) {
//            const animalId = parseInt(props.match.params.animalId)
//            const selectedAnimal = animals.find(a => a.id === animalId) || {}
//            setAnimal(selectedAnimal)
//         }
//     }
    
    
    
    
//     useEffect(() => {
//         getAnimals().then(getLocations)
//     }, [])
    
    
    
//     useEffect(() => {
//         getAnimalInEditMode()
//     }, [animals])
    
    
    
//     const constructNewAppointment = () => {
        
//         const locationId = parseInt(location.current.value)
//         const customerId = parseInt(localStorage.getItem("kennel_customer"))
        
//         if (locationId === 0) {
//             window.alert("Please select a location")
//         } else {
//             if (editMode) {
//                 updateAnimal({
//                     id: animal.id,
//                     name: animal.name,
//                     breed: animal.breed,
//                     locationId: locationId,
//                     treatment: animal.treatment,
//                     customerId: parseInt(localStorage.getItem("kennel_customer"))
//                 })
//                 .then(() => props.history.push("/animals"))
//             } else {
//                 addAnimal({
//                     name: animal.name,
//                     breed: animal.breed,
//                     locationId: locationId,
//                     treatment: animal.treatment,
//                     customerId: parseInt(localStorage.getItem("kennel_customer"))
//                 })
//                 .then(() => props.history.push("/animals"))
//             }
//         }
//     }
//         return (
//             <form className="appointmentForm">
//             <h2 className="appointmentForm__title">New Appointment</h2>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="animalName">Animal name: </label>
//                     <input type="text" id="AnimalName" ref={name} required autoFocus className="form-control" placeholder="Pet name" />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="location">Assign to location: </label>
//                     <select defaultValue="" name="location" ref={location} id="employeeLocation" className="form-control" >
//                         <option value="0">Select a location</option>
//                         {locations.map(e => (
//                             <option key={e.id} value={e.id}>
//                                 {e.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </fieldset>
            
//             <button type="confirm"
//                 onClick={evt => {
                    
//                     evt.preventDefault() // Prevent browser from submitting the form
//                     constructNewAppointment()
//                 }}
//                 className="btn btn-primary">
//                 Confirm Appointment
//             </button>
//         </form>
//     )

         
    
    
    

export const AnimalForm = (props) => {
      // Use the required context providers for data
      const { locations, getLocations } = useContext(LocationContext)
      const { addAnimal, getAnimals, animals, updateAnimal } = useContext(AnimalContext)
    
  // Component state
  const [animal, setAnimal] = useState({})

  // Is there a a URL parameter??
  const editMode = props.match.params.hasOwnProperty("animalId")

  const handleControlledInputChange = (event) => {
    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    console.log("********handleControlledInputChange Executes***********")
    console.log(event.target)
    console.log("current state variable animal", animal)

    const newAnimal = Object.assign({}, animal)
    console.log("new object that's a copy of animal state variable", newAnimal)

    newAnimal[event.target.name] = event.target.value
    console.log("newAnimal after modification", newAnimal)

    setAnimal(newAnimal)
  }

  const getAnimalInEditMode = () => {
    if (editMode) {
      const animalId = parseInt(props.match.params.animalId)
      const selectedAnimal = animals.find(a => a.id === animalId) || {}
      setAnimal(selectedAnimal)
    }
  }

  // Get locations from API when component initializes
  useEffect(() => {
    getLocations()
    getAnimals()
  }, [])

  // Once provider state is updated, determine the animal (if edit)
  useEffect(() => {
    getAnimalInEditMode()
  }, [animals])


  const constructNewAnimal = () => {
    const locationId = parseInt(animal.locationId)

    if (locationId === 0) {
      window.alert("Please select a location")
    } else {
      if (editMode) {
        updateAnimal({
          id: animal.id,
          name: animal.name,
          breed: animal.breed,
          locationId: locationId,
          treatment: animal.treatment,
          customerId: parseInt(localStorage.getItem("kennel_customer"))
        })
          .then(() => props.history.push("/animals"))
      } else {
        addAnimal({
          name: animal.name,
          breed: animal.breed,
          locationId: locationId,
          treatment: animal.status,
          customerId: parseInt(localStorage.getItem("kennel_customer"))
        })
          .then(() => props.history.push("/animals"))
      }
    }
  }

  return (
    <form className="animalForm">
      <h2 className="animalForm__title">{editMode ? "Update Animal" : "Admit Animal"}</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Animal name: </label>
          <input type="text" name="name" required autoFocus className="form-control"
            placeholder="Animal name"
            onChange={handleControlledInputChange}
            value={animal.name}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="breed">Animal breed: </label>
          <input type="text" name="breed" required className="form-control"
            placeholder="Animal breed"
            onChange={handleControlledInputChange}
            value={animal.breed}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="locationId">Location: </label>
          <select name="locationId" className="form-control"
            onChange={handleControlledInputChange}
            value={animal.locationId}>

            <option value="0">Select a location</option>
            {locations.map(e => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="treatment">Treatments: </label>
          <textarea type="text" name="treatment" className="form-control"
            onChange={handleControlledInputChange}
            value={animal.treatment}>
          </textarea>
        </div>
      </fieldset>
      <button type="submit"
        onClick={evt => {
          evt.preventDefault()
          constructNewAnimal()
        }}
        className="btn btn-primary">
        {editMode ? "Save Updates" : "Make Reservation"}
      </button>
    </form>
  )

}