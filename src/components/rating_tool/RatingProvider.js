import React, { useState, createContext }  from "react"

export const RatingContext = createContext()

export const RatingProvider = (props) => {
    const [ratings, setRatings] = useState([])
    const [yachts, setYachts] = useState([])

    const database = "http://localhost:8088"

    const getRatings = () => {
        return fetch(`${database}/ratings`)
        .then(res => res.json())
        .then(setRatings)
        .then(data => {
            console.log("getRatings succeeded:", data);
        })
        .catch((error) => {
            console.error("getRatings failed:", error);
        })
    }

    const getYachts = () => {
        return fetch(`${database}/yachts`)
        .then(res => res.json())
        .then(setYachts)
    } 
    
     const getAverageRating = (yachtId) => {
        getRatings()
        const foundRatingObjects = ratings.filter(rating => rating.yacht_id === yachtId)
        const foundRatingValues = foundRatingObjects.map(rating => parseInt(rating.rating))
        const sum = foundRatingValues.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue
            }, 0)
        const average = Math.floor(sum / foundRatingValues.length)
        return average
    }

    const updateAverageRating = (average_rating) => {
        return fetch(`${database}/yachts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(average_rating)
        })
        .then(res => res.json())
        .then(data => {
            console.log("updateAverageRating succeeded:", data);
        })
        .catch((error) => {
            console.error("updateAverageRating failed:", error);
        })
    }

    return (
        <RatingContext.Provider value={{ratings, setRatings, getRatings, getAverageRating, yachts, getYachts, setYachts, updateAverageRating}}>
            {props.children}
        </RatingContext.Provider>
    )
}