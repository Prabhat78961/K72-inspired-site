import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[Lausanne300] pt-5 text-center'>
        <div className='uppercase text text-[6vw] leading-[7vw] flex items-center justify-center'>The spark</div>
        <div className='uppercase text text-[6vw] leading-[7vw] flex items-center justify-center'>who<div className='h-[6vw] rounded-full -mt-1 overflow-hidden'><Video /></div> generates</div>
        <div className='uppercase text text-[6vw] leading-[7vw] flex items-center justify-center'>creativity</div>
    </div>
  )
}

export default HomeHeroText
