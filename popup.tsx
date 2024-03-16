import React, { useState } from "react"

import {
  CompanyBiography,
  ExtensionTitle,
  HorizontalRule,
  KeywordPhrase,
  PersonalBiography,
  PopupContainer,
  ProjectTitle,
  SiteFeedback,
  Technology
} from "~components"

import "./style.css"

const featureArray = [
  ProjectTitle,
  Technology,
  KeywordPhrase,
  CompanyBiography,
  PersonalBiography,
  SiteFeedback
]

function IndexPopup() {
  const [view, setView] = useState<"clipboard" | "settings">("clipboard")
  return (
    <PopupContainer view={view} setView={setView}>
      <ExtensionTitle />
      <HorizontalRule marginTop={0} />
      {view === "clipboard" &&
        featureArray.map((Component, index) => (
          <>
            <Component key={index} />
            {index < featureArray.length - 1 && <HorizontalRule />}
          </>
        ))}
      {view === "settings" && <div>Settings</div>}
    </PopupContainer>
  )
}

export default IndexPopup
