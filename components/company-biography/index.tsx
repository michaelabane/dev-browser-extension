import { CopyButton, Instructions } from "~components"
import { COMPANY_BIOGRAPHIES } from "~constants"
import { useCopyToClipboard } from "~hooks"

export const CompanyBiography = () => {
  const { handleCopyToClipboard, hasCopied } =
    useCopyToClipboard(COMPANY_BIOGRAPHIES)

  return (
    <div>
      <Instructions>Company biography</Instructions>
      <CopyButton onClick={handleCopyToClipboard} hasCopied={hasCopied} />
    </div>
  )
}
