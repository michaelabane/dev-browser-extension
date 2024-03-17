import React from "react"

import { HorizontalRule, Instructions } from "~components"

import { ClipboardOptions, IndustryField } from "./components"

export const Settings = () => {
  return (
    <div>
      <Instructions>Settings</Instructions>
      <HorizontalRule />
      <ClipboardOptions />
      <HorizontalRule />
      <IndustryField />
    </div>
  )
}
