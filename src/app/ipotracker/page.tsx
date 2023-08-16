'use client'
import GraphPanel from '@/components/IpoTracker/TrackerGraph/graph-panel'
import TrackerMenu from '@/components/IpoTracker/TrackerMenu/tracker-menu'
import TrackerTable from '@/components/IpoTracker/TrackerTable/tracker-table'
import React, { useState } from 'react'

export default function IpoTracker() {
  const [isDark, setIsDark] = useState(true)

  const toggleMode = () => {
    setIsDark(!isDark)
  }

  return (
    <div
      className={
        (isDark ? 'custom-bg-image' : 'bg-baseTwo') +
        ' min-h-[100vh] overflow-hidden'
      }
    >
      <TrackerMenu darkMode={isDark} toggleMode={toggleMode} />
      <GraphPanel darkMode={isDark} />
      <TrackerTable darkMode={isDark} />
    </div>
  )
}
