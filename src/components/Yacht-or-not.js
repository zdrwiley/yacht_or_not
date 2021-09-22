import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./navbar/NavBar"
import "./Yacht-or-not.css"
import { ApplicationViews } from "./ApplicationViews"
import MyImage from "./resources/YACHT (1).gif"

export const Yacht = () => {
    return (
        <div className="outerWrapper"> 

            <div className="navbar">
                <Route>
                    <NavBar />
                </Route>
            </div>

            <div className="body">

                <div className='main_logo'>
                    <img src={MyImage} alt="Yacht or Not"/>
                </div>
                
                <div>
                    <ApplicationViews/>
                </div>
            </div>

            <div className='footer'>
                    <p><a href="./about">Why does this exist?</a></p>
            </div>
        </div>
        )
}
