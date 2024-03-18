import React from "react"

type ButtonProps = {
  onClick: () => void
  text: string
  loading?: boolean
  disabled?: boolean
}

export const Button = (props: ButtonProps) => {
  const { onClick, text, loading = false, disabled = false } = props
  return (
    <button
      disabled={disabled}
      onClick={loading ? null : onClick}
      className={`mt-2 py-2 w-full flex flex-row gap-2 align-middle justify-center bg-slate-200 p-1 rounded-sm hover:shadow-sm uppercase ${loading ? "animate-pulse" : ""}`}>
      {text}
    </button>
  )
}
