/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react"
import { Route, useHistory } from "react-router-dom"
import { YachtContext } from "./YachtProvider"
import { SliderBar } from "../slider/Slider"
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
        })
    }, [])
  
    const pickYacht = () => {
        let yachtArray = [...yachts]
        setCurrentYacht(yachtArray.pop())
    }

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
                    <button className="btn btn-primary skipBtn" onClick={() => history.push("/yachts/ratingflow")}>
                    Rate and Next
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}