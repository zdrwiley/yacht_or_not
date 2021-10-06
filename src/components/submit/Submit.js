import React, { useContext, useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
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
                length: parseInt(yacht.length),
                user_id: 0,
                average_rating: 0,
                image: yacht.image,
                type: parseInt(yacht.type)
            }
        ).then(() => history.push("/"))
    }

    useEffect(() => {
        setIsLoading(false)
    }, [] )

    return (
        <div className="form_wrapper"> 
            <h1>Upload a Vessel</h1>
        <div className="uploadForm">
        <form>
            <fieldset className="yachtName">
                <div className="yachtName">
                <label htmlFor="yachtName">Vessel Name: </label>
                <input type="text" id="yachtName" name="yachtName" required autoFocus className="form-control"
                placeholder="Yacht Name"
                onChange={handleControlledInputChange}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label htmlFor="yachtLength">Vessel Length: </label>
                <input type="text" id="yachtLength" name="length" required autoFocus className="form-control"
                placeholder="Length in Feet"
                onChange={handleControlledInputChange}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="type">Vessel type: </label>
                    <div className="dropDown">
                    <select value={yacht.type} name="type" id="vesselType" className="form-control" onChange={handleControlledInputChange}>
                        <option value="0">Select from drop down list</option>
                        <option value="1">Motorboat</option>
                        <option value="2">Sailboat</option>
                        <option value="3">Dinghy</option>
                        <option value="4">Warship</option>
                        <option value="5">Container Ship</option>
                        <option value="6">Speedboat</option>
                        <option value="7">Mega Yacht</option>
                    </select>
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label htmlFor="yachtImage">Image URL: </label>
                <input type="text" id="yachtImage" name="image" required autoFocus className="form-control"
                placeholder="Paste Image URL Here"
                onChange={handleControlledInputChange}/>
                </div>
            </fieldset>
            <button className="upload" disabled={isLoading} onClick={event => {
                event.preventDefault()
                handleSaveYacht()
                }}> 
                Upload and Save
            </button>
        </form>
        </div>
        </div>
    )
}   