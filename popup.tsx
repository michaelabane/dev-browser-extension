import React from "react"

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
  return (
    <PopupContainer>
      <ExtensionTitle />
      <HorizontalRule marginTop={0} />
      {featureArray.map((Component, index) => (
        <>
          <Component key={index} />
          {index < featureArray.length - 1 && <HorizontalRule />}
        </>
      ))}
    </PopupContainer>
  )
}

export default IndexPopup
