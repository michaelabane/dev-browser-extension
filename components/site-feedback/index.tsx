import { useState } from "react"

import { CopyButton, FieldSelect, Instructions } from "~components"
import { FEEDBACK, FEEDBACK_SELECT_OPTIONS } from "~constants"

export const SiteFeedback = () => {
  const [selectedOption, setSelectedOption] = useState(
    FEEDBACK_SELECT_OPTIONS[0].value
  )
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopyOptionToClipboard = () => {
    navigator.clipboard.writeText(FEEDBACK[selectedOption])
    setHasCopied(true)
    setTimeout(() => {
      setHasCopied(false)
    }, 1500)
  }

  return (
    <div>
      <Instructions>Site feedback</Instructions>
      <FieldSelect
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        label="Level"
        options={FEEDBACK_SELECT_OPTIONS}
      />
      <CopyButton onClick={handleCopyOptionToClipboard} hasCopied={hasCopied} />
    </div>
  )
}
