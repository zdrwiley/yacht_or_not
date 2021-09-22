import React, { useState, createContext }  from "react"

export const YachtContext = createContext()

export const YachtProvider = (props) => {
    const [yachts, setYachts] = useState([])
    const [ratings, setRatings] = useState([])
    
    const database = "http://localhost:8088"

    const getYachts = () => {
        return fetch(`${database}/yachts`)
        .then(res => res.json())
        .then(setYachts)
    } 
    
    const addYacht = yacht => {
        return fetch(`${database}/yachts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(yacht)
        })
        .then(res => res.json())
    }

    const rateYacht = (yacht) => {
        return fetch(`${database}/ratings`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(yacht)
        })
        .then(res => res.json())
        .then(data => {
            console.log("rateYacht POST call succeeded:", data);
        })
        .catch((error) => {
            console.error("rateYacht POST call failed:", error);
        })
    }

    const getRatings = () => {
        return fetch(`${database}/ratings`)
        .then(res => res.json())
        .then(setRatings)
        .then(data => {
            console.log("getRatings fetch call succeeded:", data);
        })
        .catch((error) => {
            console.error("getRatings fetch call failed:", error);
        })
    }

    return (
        <YachtContext.Provider value={{yachts, setYachts, getYachts, addYacht, rateYacht, ratings, setRatings, getRatings}}>
            {props.children}
        </YachtContext.Provider>
    )
}