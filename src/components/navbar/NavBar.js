import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/">Rate Vessels</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/rankings">Vessel Rankings</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/submit">Submit Vessel</Link>
            </li>
        </ul>
    )
}
