/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react"
import { YachtContext } from "../yachts/YachtProvider"
import "./Rankings.css"

export const RankingView = () => {
    const {yachts, getYachts} = useContext(YachtContext)
   
    useEffect(() => {
        getYachts()
    }, [])
  
    return (
        <div className="rankingsWrapper">
            <h1>The Yacht List</h1>
            <h3>All-time most yachty yachts:</h3>
        </div>
    )
}