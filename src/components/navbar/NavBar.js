import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import MyImage from "/Users/zach_wiley/workspace/yacht-or-not/src/components/resources/YACHT_SMALL.svg"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <img className="navbar__logo" src={MyImage} alt="logo"/>
            </li>
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
