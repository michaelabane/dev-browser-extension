import React, { useState } from "react"

import { CopyButton, Instructions } from "~components"
import { PROJECT_TITLES_BY_FIELD, SELECT_OPTIONS } from "~constants"

export const ProjectTitle = () => {
  const [selectedOption, setSelectedOption] = useState("random")
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopyOptionToClipboard = () => {
    let textToCopy = ""
    if (selectedOption === "random") {
      const randomIndex = Math.floor(Math.random() * SELECT_OPTIONS.length)
      textToCopy = PROJECT_TITLES_BY_FIELD[SELECT_OPTIONS[randomIndex].value]
    } else {
      textToCopy = PROJECT_TITLES_BY_FIELD[selectedOption]
    }
    navigator.clipboard.writeText(textToCopy)
    setHasCopied(true)
    setTimeout(() => {
      setHasCopied(false)
    }, 1500)
  }

  return (
    <div>
      <Instructions>Copy project title</Instructions>
      <label
        htmlFor="field-select"
        className="text-[8px] uppercase text-gray-500 mb-0 mt-1">
        Industry Field
      </label>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="w-full bg-slate-100 p-1 rounded-sm"
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
