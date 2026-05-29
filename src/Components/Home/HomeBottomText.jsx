import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[Lausanne500] flex items-center justify-center gap-2'>
        <Link className='text-[5vw] hover:border-[#50fdcf] hover:text-[#50fdcf] font-extrabold border-4 border-white rounded-full px-8 mx-2 pt-3 leading-[6vw] uppercase select-none' to={'/projects'}>Projects</Link>
        <Link className='text-[5vw] hover:border-[#50fdcf] hover:text-[#50fdcf] font-extrabold border-4 border-white rounded-full px-8 mx-2 pt-3 leading-[6vw] uppercase select-none' to={'/Agency'}>Agency</Link>
    </div>
  )
}

export default HomeBottomText
