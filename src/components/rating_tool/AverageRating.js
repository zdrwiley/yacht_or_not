/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react"
import { RatingContext } from "./RatingProvider"

export const AverageRatingTool = () => {
    const {ratings, getRatings} = useContext(RatingContext)

    useEffect(() => {getRatings()}, [])

    const getAverageRating = (yachtId) => {
        const foundRatingObjects = ratings.filter(rating => rating.yacht_id === yachtId)
        const foundRatingValues = foundRatingObjects.map(rating => parseInt(rating.rating))
        const sum = foundRatingValues.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue
            }, 0)
        const average = Math.floor(sum / foundRatingValues.length)
        return average
    }

    let foundAvg = getAverageRating(1)
    

    return (
        <div className="average__rating__wrapper">
            <h2>Average Rating Tool Test Page</h2>
            <div>
                <p>The average rating for this vessel is: {foundAvg}</p> 
            </div>
        </div>
    )
}