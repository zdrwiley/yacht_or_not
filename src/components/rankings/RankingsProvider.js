import React, { useState, createContext }  from "react"

const database = "http://localhost:8088"

export const RankingsContext = createContext()

export const RankingsProvider = (props) => {
    const [rankings, setRankings] = useState( [] )

    const getRankings = () => {
        return fetch(`${database}/rankings`)
        .then(res => res.json())
        .then(setRankings)
    }
 
    return (
        <RankingsContext.Provider value={{
            rankings, getRankings, setRankings
        }}>
            {props.children}
        </RankingsContext.Provider>
    )
}