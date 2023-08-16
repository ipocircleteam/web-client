import React from 'react'

export default function TrackerTable(props: { darkMode: boolean }) {
  return (
    <div
      className={
        (props.darkMode ? 'bg-panelLight' : 'bg-gray-300') +
        ' w-[90vw] mx-auto custom-shadow-panel overflow-hidden flex justify-center items-center flex-wrap h-[auto] my-[20px] rounded-lg p-2'
      }
    ></div>
  )
}
