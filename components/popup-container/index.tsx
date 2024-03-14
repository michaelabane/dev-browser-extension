import React from "react"

type PopupContainerProps = {
  children: React.ReactNode
}

export const PopupContainer = (props: PopupContainerProps) => {
  const { children } = props
  return (
    <div
      style={{
        padding: 16,
        width: 250
      }}>
      {children}
    </div>
  )
}
