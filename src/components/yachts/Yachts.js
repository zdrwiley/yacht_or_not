/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { YachtContext } from "./YachtProvider"
import { RatingTool } from "../ratings/Rating"
import "./Yachts.css"

export const YachtView = () => {
    const history = useHistory()
    const {yachts, getYachts} = useContext(YachtContext)
    const [currentYacht, setCurrentYacht] = useState({
        "id": 1,
        "yachtName": "nautilus",
        "length": 55,
        "user_id": 3,
        "average_rating": 9,
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Yacht_skat_2009_rhodos.jpg"
      })

    useEffect(() => {
        getYachts().then(() => {
            if (yachts.length > 0) {pickYacht()}
        }).then(setSessionStorage())
    }, [])
  
    const pickYacht = () => {
        let yachtArray = [...yachts]
        setCurrentYacht(yachtArray.pop())
    }

    const setSessionStorage = () => {
        sessionStorage.setItem("saved_yacht_image", currentYacht.image)
        // sessionStorage.setItem("yacht_rating", document.getElementById('rating').value)
    }

    return (
        <div className="outerYachtWrapper">
            <div className="topToolText">
                    <h2>Is this a yacht?</h2>
            </div> 
             <div class="ratingTool">
                <RatingTool/>
            </div>
            <div className="bottomToolText">
                    <h2>...or is it Not?</h2>
            </div> 
            <div className="btnDiv">
                <button className="btn btn-primary skipBtn" onClick={() => history.push("/yachts/ratingflow")}>
                    Submit Your Rating to Show The Next Vessel!
                </button>
            </div>
            <div className="mainYachtImage">
                <img src={currentYacht.image} alt="Vessel to be Rated by User"/>
            </div>
        </div>
    )
}