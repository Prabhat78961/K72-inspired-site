import React from 'react'

const Cards = (props) => {
  return (
    <div className='mb-4'>
      <div className='w-full h-[30vw] flex gap-4 select-none'>
        <div className='flex-1 group relative transition-all duration-200 overflow-hidden cursor-pointer rounded-4xl'>
          <img className='h-full w-full object-cover' src={props.image1} alt='' />
          <div className='transition-all opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/30'>
            <h2 className='uppercase text-[3vw] font-[Lausanne500] text-white border-2 rounded-full px-4'>View Project</h2>
          </div>
        </div>
        {props.image2 && (
          <div className='flex-1 group relative transition-all duration-200 overflow-hidden cursor-pointer rounded-4xl'>
            <img className='h-full w-full object-cover' src={props.image2} alt='' />
            <div className='transition-all opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/30'>
              <h2 className='uppercase text-[3vw] font-[Lausanne500] text-white border-2 rounded-full px-4'>View Project</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cards
