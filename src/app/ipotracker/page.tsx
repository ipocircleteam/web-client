'use client'
import GraphPanel from '@/components/IpoTracker/TrackerGraph/graph-panel'
import TrackerMenu from '@/components/IpoTracker/TrackerMenu/tracker-menu'
import React, { useState } from 'react'

export default function IpoTracker() {
  const [isDark, setIsDark] = useState(true)

  const toggleMode = () => {
    setIsDark(!isDark)
  }

  return (
    <div
      className={(isDark ? 'bg-panelDark' : 'bg-baseTwo') + ' min-h-[100vh]'}
    >
      <TrackerMenu darkMode={isDark} toggleMode={toggleMode} />
      <GraphPanel darkMode={isDark} />
    </div>
  )
}
