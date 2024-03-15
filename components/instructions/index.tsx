import React from "react"

type InstructionsProps = {
  children: React.ReactNode
}

export const Instructions = (props: InstructionsProps) => {
  const { children } = props
  return (
    <p className="text-center text-[12px] text-gray-500 mb-1 uppercase">
      {children}
    </p>
  )
}
