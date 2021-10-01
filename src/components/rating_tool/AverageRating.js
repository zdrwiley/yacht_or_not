//Author: Zach Wiley
//Description: This module is not public facing. 
//This is a sandbox I used for testing average and rating functions while I built them out. 
import React, { useContext, useEffect, useState } from "react"
import { RatingContext } from "./RatingProvider"
import { YachtContext } from "../yachts/YachtProvider"

export const AverageRatingTool = () => {
    const {ratings, getRatings} = useContext(RatingContext)
    const {yachts, getYachts} = useContext(YachtContext)
    const [rankedYachts, setRankedYachts] = useState({})

    const getAverageRating = (yachtId) => {
        const foundRatingObjects = ratings.filter(rating => rating.yacht_id === yachtId)
        const foundRatingValues = foundRatingObjects.map(rating => parseInt(rating.rating))
        const sum = foundRatingValues.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue
            }, 0)
        const average = Math.floor(sum / foundRatingValues.length)
        return average
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {getRatings()}, [])
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {getYachts()}, [])

    // useEffect(() => {
    // const ranked = yachts.sort((a, b) => b.average_rating - a.average_rating) || {}
    // setRankedYachts(ranked)
    // }, [getYachts, yachts])

    useEffect(() => {
        let trueAverageArray = []
        trueAverageArray = yachts.map((yacht => (yacht.average_rating = getAverageRating(yacht.id))))
        setRankedYachts(trueAverageArray)
    }, [])


    if (!yachts.length) return <p>Loading Raw Yacht Data</p> 
    if (!rankedYachts.length) return <p>Loading Ranking Data</p> 
    
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