import React, { useState } from "react"

import { CopyButton, Instructions } from "~components"
import { COMPANY_BIOGRAPHIES } from "~constants"

export const CompanyBiography = () => {
  const [hasCopiedCompanyBiography, setHasCopiedCompanyBiography] =
    useState(false)

  const handleCopyRandomCompanyBiographyToClipboard = () => {
    const randomIndex = Math.floor(Math.random() * COMPANY_BIOGRAPHIES.length)
    const textToCopy = COMPANY_BIOGRAPHIES[randomIndex]
    navigator.clipboard.writeText(textToCopy)
    setHasCopiedCompanyBiography(true)
    setTimeout(() => {
      setHasCopiedCompanyBiography(false)
    }, 1500)
  }
  return (
    <div>
      <Instructions>Copy a company biography to your clipboard</Instructions>
      <CopyButton
        onClick={handleCopyRandomCompanyBiographyToClipboard}
        hasCopied={hasCopiedCompanyBiography}
      />
    </div>
  )
}
