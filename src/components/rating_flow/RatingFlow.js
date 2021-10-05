/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from "react"
import { YachtContext } from "../yachts/YachtProvider"
import { RatingTool } from "../rating_tool/Rating"
import { RatingContext } from "../rating_tool/RatingProvider"
import "./RatingFlow.css"

export const YachtRatingFlow = () => {
    const {yachts, getYachts, rateYacht} = useContext(YachtContext)
    const [filteredYacht, setFilteredYacht] = useState({})
    const [counter, setCounter] = useState(1)
    const {ratings, getRatings, updateAverageRating} = useContext(RatingContext)

    useEffect(() => {getRatings()}, [])

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
        updateAverageRating(counter, foundAvg)
    }

    const getAverageRating = (counter) => {
        const foundRatingObjects = ratings.filter(rating => rating.yacht_id === counter)
        const foundRatingValues = foundRatingObjects.map(rating => parseInt(rating.rating))
        const sum = foundRatingValues.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue
            }, 0)
        const average = Math.floor(sum / foundRatingValues.length)
        return average
    }

    let foundAvg = getAverageRating(counter)

    if (!yachts.length) return <p>Loading All Yachts Data</p> 
    if (!filteredYacht.length) return <p>Loading Filtered Yacht Data</p> 
    if (!ratings.length) return <p>Loading Rating Data</p>

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
                    <h4>Average rating: {foundAvg}</h4>
                </div>
            </div>
        </div>
        </div>
    )
}