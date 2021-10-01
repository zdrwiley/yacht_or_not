import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import MyImage from "/Users/zach_wiley/workspace/yacht-or-not/src/components/resources/YACHT_SMALL.svg"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/"><img className="navbar__logo" src={MyImage} alt="logo"/></Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/rankings">Top Yachts</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/submit">Submit a Photo</Link>
            </li>
        </ul>
    )
}
