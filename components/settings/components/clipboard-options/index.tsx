import React, { memo } from "react"

type ClipboardOptionsProps = {
  clipboardOptions: { value: string; label: string }[]
  checked: string[]
  setChecked: React.Dispatch<React.SetStateAction<string[]>>
}

export const ClipboardOptions = memo((props: ClipboardOptionsProps) => {
  const { clipboardOptions, checked, setChecked } = props

  return (
    <div>
      <p>Show the following in clipboard:</p>
      <div className="flex flex-col gap-2 mt-2">
        {clipboardOptions.map((option) => (
          <div key={option.value} className="flex flex-row gap-2 align-middle">
            <input
              type="checkbox"
              className="cursor-pointer"
              id={option.value}
              name={option.value}
              value={option.value}
              checked={checked.includes(option.value)}
              onChange={(e) => {
                if (e.target.checked) {
                  setChecked([...checked, e.target.value])
                } else {
                  setChecked(checked.filter((v) => v !== e.target.value))
                }
              }}
            />
            <label
              htmlFor={option.value}
              className="uppercase text-slate-600 cursor-pointer">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
})
