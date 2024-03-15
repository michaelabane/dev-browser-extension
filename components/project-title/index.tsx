import { CopyButton, FieldSelect, Instructions } from "~components"
import { PROJECT_TITLES_BY_FIELD } from "~constants"
import { useCopySelectToClipboard } from "~hooks"

export const ProjectTitle = () => {
  const {
    selectedOption,
    setSelectedOption,
    hasCopied,
    handleCopyOptionToClipboard
  } = useCopySelectToClipboard(PROJECT_TITLES_BY_FIELD)

  return (
    <div>
      <Instructions>Project title</Instructions>
      <FieldSelect
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      />
      <CopyButton onClick={handleCopyOptionToClipboard} hasCopied={hasCopied} />
    </div>
  )
}
