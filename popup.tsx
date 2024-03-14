import React from "react"

import {
  CompanyBiography,
  ExtensionTitle,
  HorizontalRule,
  KeywordPhrase,
  PopupContainer,
  Technology
} from "~components"

function IndexPopup() {
  return (
    <PopupContainer>
      <ExtensionTitle />
      <HorizontalRule marginTop={0} />
      <Technology />
      <HorizontalRule />
      <KeywordPhrase />
      <HorizontalRule />
      <CompanyBiography />
    </PopupContainer>
  )
}

export default IndexPopup
