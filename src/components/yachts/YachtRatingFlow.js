/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react"
import { Route } from "react-router-dom"
import { YachtContext } from "./YachtProvider"
import { SliderBar } from "../slider/Slider"
import "./Yachts.css"

export const YachtRatingFlow = () => {
    const {yachts, getYachts, rateYacht} = useContext(YachtContext)
    const [currentYacht, setCurrentYacht] = useState({
        "id": 1,
        "yachtName": "nautilus",
        "length": 55,
        "user_id": 3,
        "average_rating": 9,
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Yacht_skat_2009_rhodos.jpg"
      })

    

    const pickNewYacht = () => {
        let yachtArray = [...yachts]
        setCurrentYacht(yachtArray.pop())
    }

    // const submitRating = () => {
    //     let oldYacht = [...currentYacht]
    //     setPriorYacht(oldYacht)
    // }

    return (
        <div className="outerYachtWrapper"> 
             <div class='slider'>
                <Route>
                    <SliderBar />
                </Route>
            </div>
        <div className="yachtViewWrapper">
            <div className="primaryImageView">
                <div className="galleryText">
                    <h2>Is this a yacht? ...or is it Not?</h2>
                </div>
                <div className="mainYachtImage">
                    <img src={currentYacht.image} alt="Vessel to be Rated by User"/>
                </div>
                <div className="btnDiv">
                    <button className="btn btn-primary skipBtn">
                    Rate and Next
                    </button>
                </div>
            </div>

            <div className="secondaryImageView">
                <div className="yourRating">
                    <h4>Your rating: ${currentYacht.average_rating}</h4>
                </div>
                <div className="secondaryYachtImage">
                    <img src={currentYacht.image} alt="Previous Vessel User Rated"/>
                </div>
                <div className="averageRating">
                    <h4>Average rating:</h4>
                </div>
            </div>
            
        </div>
        </div>
    )
}