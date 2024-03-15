import { CopyButton, Instructions } from "~components"
import { SELECT_OPTIONS, TECHNOLOGIES_BY_FIELD } from "~constants"
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
      <Instructions>Copy technology description</Instructions>
      <label
        htmlFor="field-select"
        className="text-[8px] uppercase text-gray-500 mb-0 mt-1">
        Industry Field
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
