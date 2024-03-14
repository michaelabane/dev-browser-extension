import { CopyButton, Instructions } from "~components"
import { COMPANY_BIOGRAPHIES } from "~constants"
import { useCopyToClipboard } from "~hooks"

export const CompanyBiography = () => {
  const { handleCopyToClipboard, hasCopied } =
    useCopyToClipboard(COMPANY_BIOGRAPHIES)

  return (
    <div>
      <Instructions>Copy a company biography to your clipboard</Instructions>
      <CopyButton onClick={handleCopyToClipboard} hasCopied={hasCopied} />
    </div>
  )
}
