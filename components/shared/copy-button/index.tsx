import React, { memo } from "react"

type CopyButtonProps = {
  onClick: () => void
  hasCopied: boolean
}

export const CopyButton = memo((props: CopyButtonProps) => {
  const { onClick, hasCopied } = props

  return (
    <button
      onClick={onClick}
      className={`mt-2 w-full bg-slate-200 p-1 rounded-sm ${hasCopied ? "animate-pulse" : ""} hover:shadow-sm`}>
      {hasCopied ? "Copied!" : "Copy"}
    </button>
  )
})
