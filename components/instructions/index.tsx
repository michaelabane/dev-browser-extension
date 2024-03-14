import React from "react"

type InstructionsProps = {
  children: React.ReactNode
}

export const Instructions = (props: InstructionsProps) => {
  const { children } = props
  return (
    <p
      style={{
        textAlign: "center",
        fontSize: 12,
        color: "gray"
      }}>
      {children}
    </p>
  )
}
