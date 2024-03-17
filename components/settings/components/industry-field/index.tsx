import React, { useEffect, useState } from "react"

import { Button, FieldSelect } from "~components"
import { SELECT_OPTIONS } from "~constants"

export const IndustryField = () => {
  const [defaultIndustry, setDefaultIndustry] = useState("random")
  const [isSaved, setIsSaved] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDefaultIndustry(e.target.value)
  }

  //move to hook
  const handleSave = () => {
    setIsSaved(true)
    setTimeout(() => {
      setIsSaved(false)
    }, 1500)
  }

  const handleSaveToStorage = () => {
    chrome.storage.sync.set({ defaultIndustry }, () => {
      handleSave()
    })
  }

  useEffect(() => {
    chrome.storage.sync.get(["defaultIndustry"], (result) => {
      if (!result.defaultIndustry) return
      setDefaultIndustry(result.defaultIndustry)
    })
  }, [])

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
      <div className="flex flex-row justify-center mt-2">
        <Button
          text={isSaved ? "Saved!" : "Save"}
          onClick={handleSaveToStorage}
        />
      </div>
    </div>
  )
}
