/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { YachtContext } from "./YachtProvider"
import { RatingTool } from "../rating_tool/Rating"
import "./Yachts.css"

export const YachtView = () => {
    const history = useHistory()
    const {yachts, getYachts} = useContext(YachtContext)
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
    }

    if (!yachts.length) return <p>Loading Data</p> 
    if (!filteredYacht.length) return <p>Loading Data</p> 
    
    return (
        <div className="outerYachtWrapper">
            <div className="topToolText">
                    <h2>Is this a yacht?</h2>
            </div> 
             <div className="ratingTool">
                <RatingTool/>
            </div>
            <div className="bottomToolText">
                    <h2>...or is it Not?</h2>
            </div> 
            <div className="btnDiv">
                <button className="btn btn-primary rateBtn" onClick={() => (`${history.push(`/yachts/ratingflow/`)} & ${handleClick()}`)}>
                    Submit Rating to Show Next Vessel
                </button>
            </div>
            <div className="mainYachtImage">
                { filteredYacht.id ?  
                    <img src={filteredYacht.image} alt="Is this a yacht?"/>  
                   : <p>didn't load</p> 
                }                           
            </div>
        </div> 
    )
}

