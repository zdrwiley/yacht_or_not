import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/rankings">Rankings</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/submit">Submit Your Vessel</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/auth">Log In or Join</Link>
            </li>
        </ul>
    )
}
