/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from "react"
import { YachtContext } from "../yachts/YachtProvider"
import { RatingTool } from "../rating_tool/Rating"
import "./RatingFlow.css"

export const YachtRatingFlow = () => {
    const {yachts, getYachts, rateYacht} = useContext(YachtContext)
    const [filteredYacht, setFilteredYacht] = useState({})
    const [counter, setCounter] = useState(1)

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
        <div className="outerFlowWrapper"> 
            <div className="ratingTool">
                <RatingTool/>
            </div>
            <br></br>
            <div className="btnDiv">
                <button className="btn btn-primary rateBtn" onClick={handleClick}>
                    Rate and Show Next!
                </button>
            </div>
        <div className="innerFlowWrapper"> 
            <div className="primaryFlowView">
                <div className="mainYachtImage">
                    <img className="mainYachtImage" src={filteredYacht.image} alt="Vessel to be Rated by User"/>
                </div>
            </div>

            <div className="secondaryFlowView">
                <div className="yourRating">
                    <h4>Your rating: {sessionStorage.getItem("yacht_rating")}</h4>
                </div>
                <div className="secondaryYachtImage">
                    <img className="secondaryYachtImage" src={sessionStorage.getItem("saved_yacht_image")} alt="Previous Vessel Rated by User"/>
                </div>
                <div className="averageRating">
                    <h4>Average rating: {JSON.parse(sessionStorage.getItem("yacht_last_rated"))}</h4>
                </div>
            </div>
        </div>
        </div>
    )
}