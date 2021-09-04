import React from "react"
import { Route } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import "./Yacht.css"

export const Yacht = () => (
  <>
      render={() => {
            <>
                <Route>
                    <NavBar />
                    <ApplicationViews />
                </Route>
            </>
         
      }}
  </>
)
