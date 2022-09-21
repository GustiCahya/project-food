import React from 'react'

export default function Container({children, boxStyle = {}, ...props}) {
  return (
    <div {...props}>
        <div className="box" style={boxStyle}>
            { children }
        </div>
    </div>
  )
}
