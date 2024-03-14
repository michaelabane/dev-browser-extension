import { CopyButton, Instructions } from "~components"
import { KEYWORD_PHRASES } from "~constants"
import { useCopyToClipboard } from "~hooks"

export const KeywordPhrase = () => {
  const { handleCopyToClipboard, hasCopied } =
    useCopyToClipboard(KEYWORD_PHRASES)

  return (
    <div>
      <Instructions>Copy a keyword phrase to your clipboard</Instructions>
      <CopyButton onClick={handleCopyToClipboard} hasCopied={hasCopied} />
    </div>
  )
}
