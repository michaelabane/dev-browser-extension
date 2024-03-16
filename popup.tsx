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

function IndexPopup() {
  return (
    <PopupContainer>
      <ExtensionTitle />
      <HorizontalRule marginTop={0} />
      <ProjectTitle />
      <HorizontalRule />
      <Technology />
      <HorizontalRule />
      <KeywordPhrase />
      <HorizontalRule />
      <CompanyBiography />
      <HorizontalRule />
      <PersonalBiography />
      <HorizontalRule />
      <SiteFeedback />
    </PopupContainer>
  )
}

export default IndexPopup
