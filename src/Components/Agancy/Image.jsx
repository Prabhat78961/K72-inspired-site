import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import ImageCarl from '../../assets/Image/Carl_480x640.jpg'
import { ScrollTrigger } from 'gsap/all'

const Image = () => {
    const ImageDivRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(function(){
        gsap.to(ImageDivRef.current,{
            scrollTrigger:{
                trigger:ImageDivRef.current,
                markers:true,
                start:'top 26%',
                end:'top -115%',
                scrub:true,
                pin:true
            }
        })
    })
  return (
    <div>
      <div ref={ImageDivRef}  className='absolute h-[20vw] w-[15vw] top-[13vw] left-[26vw] select-none'>
        <img className='rounded-2xl h-full w-full object-cover' src={ImageCarl} alt="" />
      </div>
    </div>
  )
}

export default Image
