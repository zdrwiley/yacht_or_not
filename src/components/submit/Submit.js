import React, { useContext, useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { YachtContext } from "../yachts/YachtProvider"
import "./Submit.css"

export const SubmitForm = () => {
    const { addYacht } = useContext(YachtContext)
    const [yacht, setYacht] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newYacht = { ...yacht }
        newYacht[event.target.name] = event.target.value
        setYacht(newYacht)
      }
    
    const handleSaveYacht = () => {
        setIsLoading(true)
        addYacht(
            {
                yachtName: yacht.yachtName,
                length: yacht.length,
                image: yacht.image
            }
        ).then(() => history.push("/"))
    }
    
}   