/* eslint-disable react-hooks/exhaustive-deps */
//Author: Zach Wiley
//Description: This module is not public facing. 
//This is a sandbox I used for testing average and rating functions while I built them out. 
import React, { useContext, useEffect, useState } from "react"
import { RatingContext } from "./RatingProvider"
import { YachtContext } from "../yachts/YachtProvider"

export const AverageRatingTool = () => {
    const {ratings, getRatings} = useContext(RatingContext)
    const {yachts, getYachts} = useContext(YachtContext)
    const {updateAverageRating} = useContext(RatingContext)

    const calculateAverageRating = (yachtId) => {
        const foundRatingObjects = ratings.filter(rating => rating.yacht_id === yachtId)
        const foundRatingValues = foundRatingObjects.map(rating => parseInt(rating.rating))
        const sum = foundRatingValues.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue
            }, 0)
        const average = Math.floor(sum / foundRatingValues.length)
        return average
    }

    const ratingToSend = calculateAverageRating(5)

    const handleClick = () => {
       updateAverageRating(5, ratingToSend)
       console.log(`The new average rating is: ${ratingToSend}`) 
    }

    useEffect(() => {getRatings()}, [])

    useEffect(() => {getYachts()}, [])
  
    if (!yachts.length) return <p>Loading Raw Yacht Data</p> 
    
    return (
            <div className="rankingsWrapper">
                <h1>Average Tool Test Page</h1>
                <h3>Is this thing working?</h3>
                <button onClick={handleClick}>Rate Yacht</button>
            </div>
    )
}