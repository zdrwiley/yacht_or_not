import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./navbar/NavBar"
import "./Yacht-or-not.css"
import { ApplicationViews } from "./ApplicationViews"

export const Yacht = () => {
    return (
        <div class="outerWrapper"> 

            <div class="navbar">
                <Route>
                    <NavBar />
                </Route>
            </div>

            <div class="body">

                <div class='title'>
                    <h1>Yacht or Not</h1>
                </div>
                
                <div>
                    <ApplicationViews/>
                </div>
            </div>

            <div class='footer'>
                    <p>Help us keep this site FUN, CLEAN, and NAUTICAL</p>
                    <p><a href="./about">Why does this exist?</a></p>
            </div>
        </div>
        )
}
