import { CopyButton, Instructions } from "~components"
import { PERSONAL_BIOGRAPHIES } from "~constants"
import { useCopyToClipboard } from "~hooks"

export const PersonalBiography = () => {
  const { handleCopyToClipboard, hasCopied } =
    useCopyToClipboard(PERSONAL_BIOGRAPHIES)

  return (
    <div>
      <Instructions>Personal biography</Instructions>
      <CopyButton onClick={handleCopyToClipboard} hasCopied={hasCopied} />
    </div>
  )
}
