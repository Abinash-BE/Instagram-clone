import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggestions from './Suggessions'
import BottomNav from './BottomNav'

function App() {
  return (
    <div className='d-flex vh-100'>
      <div className='sidebar-wrapper'><Sidebar /></div>
      <div className='feed-section'><Feed /></div>
      <div className='suggestions-wrapper'><Suggestions /></div>
      <BottomNav />
    </div>
  )
}

export default App