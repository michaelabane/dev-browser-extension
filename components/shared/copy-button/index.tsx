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
      className={`mt-2 py-2 w-full flex flex-row gap-2 align-middle justify-center bg-slate-200 dark:bg-slate-900 p-1 rounded-sm ${hasCopied ? "animate-pulse" : ""} hover:shadow-sm dark:hover:text-yellow-500`}>
      {hasCopied ? (
        <ClipboardCheck size={14} className="dark:text-red-500" />
      ) : (
        <Clipboard size={14} />
      )}
    </button>
  )
})
