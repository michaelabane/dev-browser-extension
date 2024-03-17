import React, { useEffect, useState } from "react"

import { Button, HorizontalRule, Instructions } from "~components"

import { ClipboardOptions, IndustryField } from "./components"

const clipboardOptions = [
  {
    value: "projectTitle",
    label: "Project Title"
  },
  {
    value: "technology",
    label: "Technology Description"
  },
  {
    value: "keywordPhrase",
    label: "Keyword Phrase"
  },
  {
    value: "companyBiography",
    label: "Company Biography"
  },
  {
    value: "personalBiography",
    label: "Personal Biography"
  },
  {
    value: "siteFeedback",
    label: "Site Feedback"
  }
]

const initialState = clipboardOptions.map((option) => option.value)

export const Settings = () => {
  const [isSaved, setIsSaved] = useState(false)
  const [defaultIndustry, setDefaultIndustry] = useState("random")
  const [checked, setChecked] = useState<string[]>([])

  const handleSave = () => {
    setIsSaved(true)
    setTimeout(() => {
      setIsSaved(false)
    }, 1500)
  }

  const handleSaveSettings = () => {
    chrome.storage.sync.set(
      { clipboardOptions: checked, defaultIndustry },
      () => {
        handleSave()
      }
    )
  }

  useEffect(() => {
    chrome.storage.sync.get(
      ["clipboardOptions", "defaultIndustry"],
      (result) => {
        setChecked(result.clipboardOptions || initialState)
        setDefaultIndustry(result.defaultIndustry || "random")
      }
    )
  }, [])

  return (
    <div>
      <Instructions>Settings</Instructions>
      <HorizontalRule />
      <ClipboardOptions
        clipboardOptions={clipboardOptions}
        checked={checked}
        setChecked={setChecked}
      />
      <HorizontalRule />
      <IndustryField
        defaultIndustry={defaultIndustry}
        setDefaultIndustry={setDefaultIndustry}
      />
      <HorizontalRule />
      <div className="flex flex-row justify-center mt-2">
        <Button
          text={isSaved ? "Saved!" : "Save"}
          onClick={handleSaveSettings}
        />
      </div>
    </div>
  )
}
