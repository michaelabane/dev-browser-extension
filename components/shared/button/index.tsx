import React from "react"

type ButtonProps = {
  onClick: () => void
  text: string
  loading?: boolean
  disabled?: boolean
  initialIcon?: React.ReactNode
}

export const Button = (props: ButtonProps) => {
  const {
    onClick,
    text,
    loading = false,
    disabled = false,
    initialIcon
  } = props
  return (
    <button
      disabled={disabled}
      onClick={loading ? null : onClick}
      className={`mt-2 py-2 w-full flex flex-row gap-2 align-middle justify-center bg-slate-200 dark:bg-slate-900 dark:hover:text-yellow-500 p-1 rounded-sm hover:shadow-sm uppercase ${loading ? "animate-pulse" : ""}`}>
      {initialIcon && initialIcon}
      {text}
    </button>
  )
}
