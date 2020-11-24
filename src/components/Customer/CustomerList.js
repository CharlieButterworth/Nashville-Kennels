import React, { useContext, useEffect } from "react"
import "./Customer.css"
import { CustomerContext } from "./CustomerProvider"
import { Customer } from "./Customer"

export const CustomerList = () => {
    // This state changes when `getLocations()` is invoked below
    const { customers, getCustomers } = useContext(CustomerContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("LocationList: Initial render before data")
        getCustomers()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    // useEffect(() => {
    //     console.log("LocationList: Location state changed")
    //     console.log(locations)
    // }, [locations])

    return (
        <div className="customer">
        {
            customers.map(cus => <Customer key={cus.id} customer={cus} />)
        }
        </div>
    )
}