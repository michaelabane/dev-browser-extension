import React, { memo } from "react"

import { FieldSelect } from "~components"
import { SELECT_OPTIONS } from "~constants"

type IndustryFieldProps = {
  defaultIndustry: string
  setDefaultIndustry: React.Dispatch<React.SetStateAction<string>>
}

export const IndustryField = memo((props: IndustryFieldProps) => {
  const { defaultIndustry, setDefaultIndustry } = props

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDefaultIndustry(e.target.value)
  }

  return (
    <div>
      <p>Set default industry field:</p>
      <div className="flex flex-col mt-2">
        <FieldSelect
          value={defaultIndustry}
          options={SELECT_OPTIONS}
          onChange={handleChange}
        />
      </div>
    </div>
  )
})
