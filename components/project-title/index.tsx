import { CopyButton, Instructions } from "~components"
import { PROJECT_TITLES_BY_FIELD, SELECT_OPTIONS } from "~constants"
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
      <label
        htmlFor="field-select"
        className="text-[8px] uppercase text-gray-500 mb-0 mt-1">
        Industry
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
