import React, { useState } from "react"

export const RatingTool = () => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    let n = 0
    return (
        <>
            {[...Array(10)].map((anchor, index) => {
                index += 1
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    > 
                        <span className="anchor">{n += 1} &#9875;</span>
                    </button>
            )})}
        </>
    )
}