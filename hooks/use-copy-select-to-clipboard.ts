import { useState } from "react"

import { SELECT_OPTIONS } from "~constants"

export const useCopySelectToClipboard = (textObject: {
  [key: string]: string
}) => {
  const [selectedOption, setSelectedOption] = useState("random")
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopyOptionToClipboard = () => {
    let textToCopy = ""
    if (selectedOption === "random") {
      const randomIndex = Math.floor(Math.random() * SELECT_OPTIONS.length)
      textToCopy = textObject[SELECT_OPTIONS[randomIndex].value]
    } else {
      textToCopy = textObject[selectedOption]
    }
    navigator.clipboard.writeText(textToCopy)
    setHasCopied(true)
    setTimeout(() => {
      setHasCopied(false)
    }, 1500)
  }

  return {
    selectedOption,
    hasCopied,
    setSelectedOption,
    handleCopyOptionToClipboard
  }
}
