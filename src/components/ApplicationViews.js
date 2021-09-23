import React from "react"
import { Route } from "react-router-dom"

import { YachtProvider } from "./yachts/YachtProvider"
import { YachtView } from "./yachts/Yachts"
import { YachtRatingFlow } from "./rating_flow/RatingFlow" 
import { RankingView } from "./rankings/RankingsList"
import { SubmitForm } from "./submit/Submit"
import { AboutSite } from "./about/About"
import { AverageRatingTool } from "./rating_tool/AverageRating"
import { RatingProvider } from "./rating_tool/RatingProvider"

export const ApplicationViews = () => {
    return (
      <>
        <YachtProvider>
        <RatingProvider>

          <Route exact path="/">
            <YachtView/>
          </Route>

          <Route path="/yachts/ratingflow/">
            <YachtRatingFlow/>
          </Route>

          <Route path="/rankings/">
            <RankingView/>
          </Route>

          <Route path="/submit/">
            <SubmitForm/>
          </Route>

          <Route path="/about/">
            <AboutSite/>
          </Route>

          <Route path="/averages/">
            <AverageRatingTool/>
          </Route>

        </RatingProvider>
        </YachtProvider>
      </>
  )
}