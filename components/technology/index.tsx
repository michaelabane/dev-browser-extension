import React, { useState } from "react"

import { CopyButton, Instructions } from "~components"
import { SELECT_OPTIONS, TECHNOLOGIES_BY_FIELD } from "~constants"

export const Technology = () => {
  const [selectedOption, setSelectedOption] = useState("random")
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopyOptionToClipboard = () => {
    let textToCopy = ""
    if (selectedOption === "random") {
      const randomIndex = Math.floor(Math.random() * SELECT_OPTIONS.length)
      textToCopy = TECHNOLOGIES_BY_FIELD[SELECT_OPTIONS[randomIndex].value]
    } else {
      textToCopy = TECHNOLOGIES_BY_FIELD[selectedOption]
    }
    navigator.clipboard.writeText(textToCopy)
    setHasCopied(true)
    setTimeout(() => {
      setHasCopied(false)
    }, 1500)
  }

  return (
    <div>
      <Instructions>Copy technology description</Instructions>
      <label
        htmlFor="field-select"
        style={{
          textTransform: "uppercase",
          color: "gray",
          fontSize: 8
        }}>
        Industry Field
      </label>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        style={{ width: "100%" }}
        id="field-select">
        {SELECT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <CopyButton onClick={handleCopyOptionToClipboard} hasCopied={hasCopied} />
    </div>
  )
}
