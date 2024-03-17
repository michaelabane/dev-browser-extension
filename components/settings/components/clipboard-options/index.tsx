import React, { useEffect, useState } from "react"

import { Button } from "~components"

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

export const ClipboardOptions = () => {
  const [checked, setChecked] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    chrome.storage.sync.get(["clipboardOptions"], (result) => {
      setChecked(result.clipboardOptions || initialState)
      setIsLoading(false)
    })
  }, [])

  const handleSave = () => {
    setIsSaved(true)
    setTimeout(() => {
      setIsSaved(false)
    }, 1500)
  }

  const handleSaveToStorage = () => {
    chrome.storage.sync.set({ clipboardOptions: checked }, () => {
      handleSave()
    })
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

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
      <div className="flex flex-row justify-center mt-2">
        <Button
          text={isSaved ? "Saved!" : "Save"}
          onClick={handleSaveToStorage}
        />
      </div>
    </div>
  )
}
