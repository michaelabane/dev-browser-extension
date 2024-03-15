import { Clipboard, ClipboardCheck } from "lucide-react"
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
      className={`mt-2 py-2 w-full flex flex-row gap-2 align-middle justify-center bg-slate-200 p-1 rounded-sm ${hasCopied ? "animate-pulse" : ""} hover:shadow-sm`}>
      {hasCopied ? <ClipboardCheck size={14} /> : <Clipboard size={14} />}
    </button>
  )
})
