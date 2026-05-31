import React from 'react'
import SkyBag from '../../assets/Images/Baginsky.jpg'
import Thumbnail from '../../assets/Images/Thumbnail.jpg'

const Fullscreen = () => {
  return (
    <div className='h-screen absolute w-full py-34 bg-amber-900 select-none'>
      <div className=''>
        <div className='border-t bg-[#50fdcf] hover:cursor-pointer relative overflow-hidden'>
          <h1 className='font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-4 uppercase'>Work</h1>
          <div className='absolute flex h-[15vw] top-[-4vw] text-black'>
            <div className='flex items-center bg-[#50fdcf]'>
              <h2 className='whitespace-nowrap font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-6 uppercase'>See Everything</h2>
              <img className='h-[7vw] shrink-0 rounded-full w-[16vw] object-cover pt-2' src={SkyBag} alt="" />
              <h2 className='whitespace-nowrap font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-6 uppercase'>See Everything</h2>
              <img className='h-[7vw] shrink-0 rounded-full w-[16vw] object-cover pt-2' src={Thumbnail} alt="" />
            </div>
          </div>
        </div>
        <div className='border-t hover:cursor-pointer'>
          <h1 className='font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-4 uppercase'>Agency</h1>
        </div>
        <div className='border-t hover:cursor-pointer'>
          <h1 className='font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-4 uppercase'>Contact</h1>
        </div>
        <div className='border-y hover:cursor-pointer'>
          <h1 className='font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-4 uppercase'>Blog</h1>
        </div>
      </div>
    </div>
  )
}

export default Fullscreen
