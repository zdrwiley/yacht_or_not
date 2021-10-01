/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react"
import { YachtContext } from "../yachts/YachtProvider"
import "./Rankings.css"

export const RankingView = () => {
    const {yachts, getYachts} = useContext(YachtContext)
    const [rankedYachts, setRankedYachts] = useState({})
 
    useEffect(() => {getYachts()}, [])

    useEffect(() => {
        const ranked = yachts.sort((a, b) => b.average_rating - a.average_rating) || {}
        setRankedYachts(ranked)
    }, [getYachts, yachts])

    if (!yachts.length) return <p>Loading Data</p> 
    if (!rankedYachts.length) return <p>Loading Data</p> 
  
    return (
        <div className="rankingsWrapper">
            <h1>The Yacht List</h1>
            <h3>All-time yachtyest yachts:</h3>
            {rankedYachts.map(yacht => {
                return (
                <div className="ranking" key={`rankingList=${yacht.id}`} id={`rank=${yacht.id}`}>
                    <div className="YachtName">
                        Name:  {yacht.yachtName}
                    </div>
                    <div className="yachtLength">
                        Length: {yacht.length}'
                    </div>
                    <div className="yachtAverageRating">
                        Average Rating: {yacht.average_rating}
                    </div>
                    <div className="yachtPhoto">
                        <img className="yachtPhoto" src={`${yacht.image}`} alt="yacht"/> 
                    </div>
                 </div>
                )
            } )}
        </div>
    )
}