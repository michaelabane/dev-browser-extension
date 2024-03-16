import React, { memo } from "react"

import { SELECT_OPTIONS } from "~constants"

type FieldSelectProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  label?: string
  options?: { value: string; label: string }[]
}

export const FieldSelect = memo((props: FieldSelectProps) => {
  const {
    value,
    onChange,
    label = "Industry",
    options = SELECT_OPTIONS
  } = props
  return (
    <>
      <label
        htmlFor="field-select"
        className="text-[8px] uppercase text-gray-500 mb-0 mt-1">
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        className="w-full bg-slate-100 p-1 rounded-sm"
        id="field-select">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  )
})
