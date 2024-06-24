import { memo } from "react"

export const Small = memo(({value}) => {
    console.log('Me volvi a diburar :(')
  return (
   <small>{value}</small>
  )
})
