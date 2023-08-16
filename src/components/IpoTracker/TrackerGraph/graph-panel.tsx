import React from 'react'

export default function GraphPanel(props: { darkMode: boolean }) {
  return (
    <div
      className={
        (props.darkMode ? 'bg-panelLight' : 'bg-gray-300') +
        ' w-[90vw] mx-auto custom-shadow-panel h-[300px] my-[20px] rounded-lg p-2'
      }
    >
      hi
    </div>
  )
}
