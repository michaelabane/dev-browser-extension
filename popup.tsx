import React, { useEffect, useState } from "react"

import {
  CompanyBiography,
  HorizontalRule,
  KeywordPhrase,
  Notes,
  PersonalBiography,
  PopupContainer,
  ProjectTitle,
  Settings,
  SiteFeedback,
  Technology
} from "~components"
import type { View } from "~types"

import "./style.css"

type Feature = {
  component: () => React.JSX.Element
  key: string
}

const featureArray: Feature[] = [
  { component: ProjectTitle, key: "projectTitle" },
  { component: Technology, key: "technology" },
  { component: KeywordPhrase, key: "keywordPhrase" },
  { component: CompanyBiography, key: "companyBiography" },
  { component: PersonalBiography, key: "personalBiography" },
  { component: SiteFeedback, key: "siteFeedback" },
  { component: Notes, key: "notes" }
]

function IndexPopup() {
  const [view, setView] = useState<View>("clipboard")
  const [renderedArray, setRenderedArray] = useState<Feature[]>(featureArray)

  useEffect(() => {
    chrome.storage.local.get(["darkMode"], function (result) {
      if (result.darkMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    })
  }, [])

  chrome.storage.sync.get(["clipboardOptions"], (result) => {
    if (!result.clipboardOptions) return
    const newRenderedArray = featureArray.filter((feature) =>
      result.clipboardOptions.includes(feature.key)
    )
    setRenderedArray(newRenderedArray)
  })

  return (
    <PopupContainer view={view} setView={setView}>
      {view === "clipboard" &&
        renderedArray.map((component, index) => (
          <>
            <component.component key={component.key} />
            {index < renderedArray.length - 1 && <HorizontalRule />}
          </>
        ))}
      {view === "settings" && <Settings />}
    </PopupContainer>
  )
}

export default IndexPopup
