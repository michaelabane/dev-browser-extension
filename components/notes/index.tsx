import React, { useEffect, useState } from "react"

import { Instructions } from "~components"

export const Notes = () => {
  const [notes, setNotes] = useState("")

  const handleNotesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(event.target.value)
    chrome.storage.local.set({ notes: event.target.value })
  }

  useEffect(() => {
    chrome.storage.local.get(["notes"], (result) => {
      if (result.notes) {
        setNotes(result.notes)
      }
    })
  }, [])

  return (
    <div>
      <Instructions>Notes</Instructions>
      <textarea
        className="w-full p-2 mt-2 border border-gray-300 rounded-md"
        rows={5}
        placeholder="Type your notes here"
        value={notes}
        onChange={handleNotesChange}
      />
    </div>
  )
}
