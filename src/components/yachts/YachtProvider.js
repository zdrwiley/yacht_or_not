import React, { useState, createContext }  from "react"

const database = "http://localhost:8088"

export const YachtContext = createContext()

export const YachtProvider = (props) => {
    const [yachts, setYachts] = useState( [] )

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

    const rateYacht = (priorYacht) => {
        return fetch(`${database}/yachts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(priorYacht)
        })
        .then(res => res.json())
    }

    return (
        <YachtContext.Provider value={{
            yachts, getYachts, addYacht, rateYacht
        }}>
            {props.children}
        </YachtContext.Provider>
    )
}