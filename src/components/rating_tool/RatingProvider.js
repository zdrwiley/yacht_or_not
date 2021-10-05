import React, { useState, createContext }  from "react"

export const RatingContext = createContext()

export const RatingProvider = (props) => {
    const [ratings, setRatings] = useState([])
    const [averageRatings, setAverageRatings] = useState([])

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
    
    const getAverageRatings = () => {
        return fetch(`${database}/averageRatings`)
        .then(res => res.json())
        .then(setAverageRatings)
        .then(data => {
            console.log("getAverageRatings succeeded:", data);
        })
        .catch((error) => {
            console.error("getAverageRatings failed:", error);
        })
    }


    const updateAverageRating = (yachtId, newAverage) => {
        return fetch(`${database}/yachts/${yachtId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({average_rating: newAverage})
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
        <RatingContext.Provider value={{ratings, setRatings, getRatings, updateAverageRating, getAverageRatings, setAverageRatings, averageRatings}}>
            {props.children}
        </RatingContext.Provider>
    )
}