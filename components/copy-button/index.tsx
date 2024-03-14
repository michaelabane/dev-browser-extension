import React from "react"

type CopyButtonProps = {
  onClick: () => void
  hasCopied: boolean
}

export const CopyButton = (props: CopyButtonProps) => {
  const { onClick, hasCopied } = props
  return (
    <button onClick={onClick} style={{ marginTop: 8, width: "100%" }}>
      {hasCopied ? "Copied!" : "Copy to Clipboard"}
    </button>
  )
}
