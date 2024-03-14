import React, { useState } from "react"

import { CopyButton, Instructions } from "~components"
import { KEYWORD_PHRASES } from "~constants"

export const KeywordPhrase = () => {
  const [hasCopiedKeyword, setHasCopiedKeyword] = useState(false)
  const handleCopyRandomKeywordToClipboard = () => {
    const randomIndex = Math.floor(Math.random() * KEYWORD_PHRASES.length)
    const textToCopy = KEYWORD_PHRASES[randomIndex]
    navigator.clipboard.writeText(textToCopy)
    setHasCopiedKeyword(true)
    setTimeout(() => {
      setHasCopiedKeyword(false)
    }, 1500)
  }
  return (
    <div>
      <Instructions>Copy a keyword phrase to your clipboard</Instructions>
      <CopyButton
        onClick={handleCopyRandomKeywordToClipboard}
        hasCopied={hasCopiedKeyword}
      />
    </div>
  )
}
