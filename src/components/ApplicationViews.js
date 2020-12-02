import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./Location/LocationProvider";
import { AnimalProvider } from "./animal/AnimalProvider";
import { LocationList } from "./Location/LocationList";
import { AnimalList } from "./animal/AnimalList";
import { CustomerProvider } from "./Customer/CustomerProvider";
import { CustomerList } from "./Customer/CustomerList";
import { EmployeeProvider } from "./Employee/EmployeeProvider";
import { EmployeeList } from "./Employee/EmployeeList";
import { EmployeeForm } from "./Employee/EmployeeForm";
import { AnimalForm } from "./animal/AnimalForm";
import { EmployeeDetail } from "./Employee/EmployeeDetail";
import { LocationDetail } from "./Location/LocationDetail";
import { AnimalDetails } from "./animal/AnimalDetails";
import { AnimalSearch } from "./animal/AnimalSearch";

export const ApplicationViews = (props) => {
  return (
    <>
      <EmployeeProvider>
        <AnimalProvider>
          <LocationProvider>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
              <LocationList />
            </Route>
            <Route
              path="/locations/:locationId(\d+)"
              render={(props) => <LocationDetail {...props} />}
            />
          </LocationProvider>
        </AnimalProvider>
      </EmployeeProvider>

      {/* HERE ARE THE ANIMALS */}

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            <Route
              exact
              path="/animals"
              render={(props) => {
                return (
                  <>
                    <AnimalSearch />
                    <AnimalList {...props} />
                  </>
                );
              }}
            />
            <Route
              exact
              path="/animals/create"
              render={(props) => <AnimalForm {...props} />}
            />
            <Route
              path="/animals/:animalId(\d+)"
              render={(props) => <AnimalDetails {...props} />}
            />
            <Route
              path="/animals/edit/:animalId(\d+)"
              render={(props) => <AnimalForm {...props} />}
            />
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
            <Route
              exact
              path="/employees"
              render={(props) => <EmployeeList {...props} />}
            />
            <Route
              exact
              path="/employees/create"
              render={(props) => <EmployeeForm {...props} />}
            />
            {/* New route for showing employee details */}
            <Route
              path="/employees/:employeeId(\d+)"
              render={(props) => <EmployeeDetail {...props} />}
            />
          </AnimalProvider>
        </LocationProvider>
      </EmployeeProvider>
    </>
  );
};
