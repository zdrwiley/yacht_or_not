/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from "react"
import { YachtContext } from "../yachts/YachtProvider"
import { RatingTool } from "../rating_tool/Rating"
import "./RatingFlow.css"

export const YachtRatingFlow = () => {
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
        <div className="outerFlowWrapper"> 
            <div className="primaryFlowView">
                <div className="topToolText">
                        <h2>Is this a yacht?</h2>
                </div> 
                <div class="ratingTool">
                    <RatingTool/>
                </div>
                <div className="bottomToolText">
                        <h2>...or is it Not?</h2>
                </div> 
                <div className="btnDiv">
                    <button className="btn btn-primary rateBtn" onClick={handleClick}>
                        Submit Rating to Show Next Vessel
                    </button>
                </div>
                <div className="mainYachtImage">
                    <img src={filteredYacht.image} alt="Vessel to be Rated by User"/>
                </div>
            </div>

            <div className="secondaryFlowView">
                <div className="yourRating">
                    <h4>Your rating: {sessionStorage.getItem("yacht_rating")}</h4>
                </div>
                <div className="secondaryYachtImage">
                    <img src={sessionStorage.getItem("saved_yacht_image")} alt="Previous Vessel Rated by User"/>
                </div>
                <div className="averageRating">
                    <h4>Average rating:{JSON.parse(sessionStorage.getItem("yacht_last_rated"))}</h4>
                </div>
            </div>
            
        </div>
    )
}