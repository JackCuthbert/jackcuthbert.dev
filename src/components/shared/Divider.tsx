import React from 'react'

const gradient = 'linear-gradient(90deg, #A88BEB 0%, #F8CEEC 100%)'

interface Props {
  className?: string
}

export function Divider(props: Props): JSX.Element {
  const className = `border-t ${props.className ?? ''}`

  return (
    <div
      className={className}
      style={{
        borderImage: gradient,
        borderImageSlice: 1
      }}
    />
  )
}
