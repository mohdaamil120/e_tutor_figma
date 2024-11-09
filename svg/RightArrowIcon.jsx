import React from 'react'

function RightArrowIcon({color="#FF6636", width="19" ,height="16"}) {
  return (
    <svg width={width} height={height} viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.25 8H17.75" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11 1.25L17.75 8L11 14.75" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  )
}

export default RightArrowIcon
