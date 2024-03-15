import React from "react"

import {
  CompanyBiography,
  ExtensionTitle,
  HorizontalRule,
  KeywordPhrase,
  PopupContainer,
  ProjectTitle,
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
    </PopupContainer>
  )
}

export default IndexPopup
