import { CopyButton, Instructions } from "~components"
import { KEYWORD_PHRASES } from "~constants"
import { useCopyToClipboard } from "~hooks"

export const KeywordPhrase = () => {
  const { handleCopyToClipboard, hasCopied } =
    useCopyToClipboard(KEYWORD_PHRASES)

  return (
    <div>
      <Instructions>Keyword phrase</Instructions>
      <CopyButton onClick={handleCopyToClipboard} hasCopied={hasCopied} />
    </div>
  )
}
