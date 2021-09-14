import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./navbar/NavBar"
import "./Yacht-or-not.css"
import { ApplicationViews } from "./ApplicationViews"

export const Yacht = () => {
    return (
        <div class="wrapper"> 

            <div class="navbar">
                <Route>
                    <NavBar />
                </Route>
            </div>

            <div class='title'>
                <h1>Yacht or Not</h1>
            </div>

            <div class="body">
                <div class='main_image'>
                    <ApplicationViews/>
                </div>
                <div class='footer'>
                    <footer>Help us keep this site FUN, CLEAN, and NAUTICAL</footer>
                </div>
            </div>
        </div>
        )
}
