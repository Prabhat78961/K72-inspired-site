import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Agency from './Pages/Agency'
import Projects from './Pages/Projects'
import Video from '/Sigma Web Development/Projects/Project 4 - K72/src/assets/Video.mp4'

const App = () => {
  return (
      <div className='text-white selection:bg-[#50fdcf] selection:text-[#111]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Agency' element={<Agency />} />
          <Route path='/Projects' element={<Projects />} />
        </Routes>
      </div>
  )
}

export default App