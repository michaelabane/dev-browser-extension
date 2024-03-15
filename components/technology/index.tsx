import { CopyButton, FieldSelect, Instructions } from "~components"
import { TECHNOLOGIES_BY_FIELD } from "~constants"
import { useCopySelectToClipboard } from "~hooks"

export const Technology = () => {
  const {
    selectedOption,
    setSelectedOption,
    hasCopied,
    handleCopyOptionToClipboard
  } = useCopySelectToClipboard(TECHNOLOGIES_BY_FIELD)

  return (
    <div>
      <Instructions>Technology description</Instructions>
      <FieldSelect
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      />
      <CopyButton onClick={handleCopyOptionToClipboard} hasCopied={hasCopied} />
    </div>
  )
}
