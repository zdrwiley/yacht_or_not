/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { YachtContext } from "./YachtProvider"
import { RatingTool } from "../rating_tool/Rating"
import MyImage from "../resources/YACHT (3).gif"
import "./Yachts.css"

export const YachtView = () => {
    const history = useHistory()
    const {yachts, getYachts, rateYacht} = useContext(YachtContext)
    const [filteredYacht, setFilteredYacht] = useState({})
    const [counter, setCounter] = useState(0)

    useEffect(() => {setCounter(counter +1)}, [])

    useEffect(() => {getYachts()}, [])

    useEffect(() => {
        const subset = yachts.find(yacht => yacht.id === counter) || {}
        setFilteredYacht(subset)
    }, [getYachts, yachts, counter])


    const setSessionStorage = () => {
        sessionStorage.setItem("saved_yacht_image", filteredYacht.image)
        sessionStorage.setItem("yacht_last_rated", filteredYacht.average_rating)
    }

    const handleClick = () => {
        setSessionStorage()
        setCounter(counter +1)
        rateYacht(
            {
                "yacht_id": filteredYacht.id,
                "rating": sessionStorage.getItem("yacht_rating")
            }
        )
    }

    if (!yachts.length) return <p>Loading Data</p> 
    if (!filteredYacht.length) return <p>Loading Data</p> 
    
    return (
        <div className="outerYachtWrapper">
            <div className='main_logo'>
                <img src={MyImage} alt="Yacht or Not"/>
             </div>
             <div className="ratingTool">
                <RatingTool/>
            </div>
            <br></br>
            <div className="btnDiv">
                <button className="rate" onClick={() => (`${history.push(`/yachts/ratingflow/`)} & ${handleClick()}`)}>
                    Rate and Show Next!
                </button>
            </div>
            <div className="mainYachtImage">
                { filteredYacht.id ?  
                    <img className="mainYachtImage" src={filteredYacht.image} alt="Is this a yacht?"/>  
                   : <p>Image failed to load</p> 
                }                           
            </div>
        </div> 
    )
}