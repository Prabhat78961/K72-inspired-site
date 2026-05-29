import React from 'react'
import VideoSrc from '../../assets/Video.mp4'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover select-none' autoPlay loop muted src={VideoSrc}></video>
    </div>
  )
}

export default Video
