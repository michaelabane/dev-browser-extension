import React from "react"

type PopupContainerProps = {
  children: React.ReactNode
}

export const PopupContainer = (props: PopupContainerProps) => {
  const { children } = props
  return <div className="p-4 w-[250px]">{children}</div>
}
