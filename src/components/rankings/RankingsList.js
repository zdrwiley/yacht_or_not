/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react"
import { YachtContext } from "../yachts/YachtProvider"
import "./Rankings.css"

export const RankingView = () => {
    const {yachts, getYachts} = useContext(YachtContext)
    //instead of defining types seperately, can I just expand yachts to include the types array?
    const {types, getTypes} = useContext(YachtContext)
   


    useEffect(() => {
        getYachts().then(getTypes())
    }, [])

    return (
        <div className="rankingsWrapper">
            <h1>The Yacht List</h1>
            <h3>All-time most yachty yachts:</h3>
            {yachts.map(yacht => {
                return (
                <div className="ranking" key={`rankingList=${yacht.id}`} id={`rank=${yacht.id}`}>
                    <div className="YachtName">
                        Name:  { yacht.yachtName }
                    </div>
                    <div className="yachtLength">
                        Length: {yacht.length }
                    </div>
                    <div className="yachtAverageRating">
                        Average Rating: { yacht.average_rating }
                    </div>
                    <div className="yachtType">
                        Type: { parseInt(yacht.type) }
                    </div>
                    <div className="yachtPhoto">
                        <img src={`${yacht.image}`} alt="yacht"/> 
                    </div>
                 </div>
                )
            } )}
        </div>
    )
}