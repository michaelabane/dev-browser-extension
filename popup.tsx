import React, { useState } from "react"

import {
  CompanyBiography,
  HorizontalRule,
  KeywordPhrase,
  PersonalBiography,
  PopupContainer,
  ProjectTitle,
  Settings,
  SiteFeedback,
  Technology
} from "~components"

import "./style.css"

const featureArray = [
  { component: ProjectTitle, key: "projectTitle" },
  { component: Technology, key: "technology" },
  { component: KeywordPhrase, key: "keywordPhrase" },
  { component: CompanyBiography, key: "companyBiography" },
  { component: PersonalBiography, key: "personalBiography" },
  { component: SiteFeedback, key: "siteFeedback" }
]

function IndexPopup() {
  const [view, setView] = useState<"clipboard" | "settings">("clipboard")
  return (
    <PopupContainer view={view} setView={setView}>
      {view === "clipboard" &&
        featureArray.map((component, index) => (
          <>
            <component.component key={component.key} />
            {index < featureArray.length - 1 && <HorizontalRule />}
          </>
        ))}
      {view === "settings" && <Settings />}
    </PopupContainer>
  )
}

export default IndexPopup
