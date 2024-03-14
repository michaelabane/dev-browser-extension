import { useState } from "react"

type Array = string[]

export const useCopyToClipboard = (array: Array) => {
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopyToClipboard = () => {
    const randomIndex = Math.floor(Math.random() * array.length)
    const textToCopy = array[randomIndex]
    navigator.clipboard.writeText(textToCopy)
    setHasCopied(true)
    setTimeout(() => {
      setHasCopied(false)
    }, 1500)
  }

  return {
    handleCopyToClipboard,
    hasCopied
  }
}
