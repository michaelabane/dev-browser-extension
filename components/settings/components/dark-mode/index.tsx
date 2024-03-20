import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "~components"

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    chrome.storage.local.get(["darkMode"], function (result) {
      setDarkMode(result.darkMode || false)
      if (result.darkMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    })
  }, [])

  const toggleDarkMode = () => {
    const newDarkModeValue = !darkMode
    setDarkMode(newDarkModeValue)
    chrome.storage.local.set({ darkMode: newDarkModeValue })
    if (newDarkModeValue) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <Button
      onClick={toggleDarkMode}
      text=""
      initialIcon={darkMode ? <Sun className="text-yellow-500" /> : <Moon />}
    />
  )
}
