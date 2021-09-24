import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./navbar/NavBar"
import "./Yacht-or-not.css"
import { ApplicationViews } from "./ApplicationViews"

export const Yacht = () => {
    return (
        <div className="outerWrapper"> 

            <div className="navbar__wrapper">
                <Route>
                    <NavBar />
                </Route>
            </div>

            <div className="body">
                
                <div>
                    <ApplicationViews/>
                </div>
            </div>

            <div className='footer'>
                    <p>Help us keep this site FUN, CLEAN, and NAUTICAL <span className="anchor">&#9875;</span></p>
                    <p>© 2021 The Yacht Pun Corporation.  All rights reserved.</p> 
                    <p><a className="footer_small" href="./about">Why does this exist?</a></p>
            </div>
        </div>
        )
}
