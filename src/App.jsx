import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggestions from './Suggessions'

function App() {
  return (
    <div className='d-flex vh-100'>
      <div className='w-20 sidebar-wrapper'><Sidebar /></div>
      <div className='w-50 feed-wrapper'><Feed /></div>
      <div className='w-30 suggestions-wrapper'><Suggestions /></div>
    </div>
  )
}

export default App