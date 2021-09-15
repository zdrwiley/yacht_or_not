import React from "react"
import { Route } from "react-router-dom"

import { YachtProvider } from "./yachts/YachtProvider"
import { YachtView } from "./yachts/Yachts"
import { YachtRatingFlow } from "./yachts/YachtRatingFlow"
import { RankingView } from "./rankings/RankingsList"
import { SubmitForm } from "./submit/Submit"

export const ApplicationViews = () => {
    return (
      <>
        <YachtProvider>

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

        </YachtProvider>
      </>
  )
}