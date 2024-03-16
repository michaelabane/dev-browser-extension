import React from "react"

type ButtonProps = {
  onClick: () => void
  text: string
}

export const Button = (props: ButtonProps) => {
  const { onClick, text } = props
  return (
    <button
      onClick={onClick}
      className={`mt-2 py-2 w-full flex flex-row gap-2 align-middle justify-center bg-slate-200 p-1 rounded-sm hover:shadow-sm uppercase`}>
      {text}
    </button>
  )
}
