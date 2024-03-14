import React from "react"

type HorizontalRuleProps = {
  marginTop?: number
  marginBottom?: number
}

export const HorizontalRule = (props: HorizontalRuleProps) => {
  const { marginTop = 16, marginBottom = 16 } = props
  return (
    <hr
      style={{
        marginTop: marginTop,
        marginBottom: marginBottom,
        border: "none",
        borderBottom: "1px solid #ddd"
      }}
    />
  )
}
