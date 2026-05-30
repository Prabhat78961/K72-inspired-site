import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'
import Carl from '../../assets/Images/Carl_480x640.jpg'
import Olivier from '../../assets/Images/Olivier_480x640.jpg'
import ChantalG from '../../assets/Images/ChantalG_480x640.jpg'
import Michele from '../../assets/Images/Michele_480X640.jpg'
import MEL from '../../assets/Images/MEL_480X640.jpg'
import CAMILLE from '../../assets/Images/CAMILLE_480X640_2.jpg'
import MEGGIE from '../../assets/Images/MEGGIE_480X640_2.jpg'
import Joel from '../../assets/Images/joel_480X640_3.jpg'

const Image = () => {
    const ImageDivRef = useRef(null)
    const ImageRef = useRef(null)
    const ImageArray = [
        Carl,
        Olivier,
        ChantalG,
        Michele,
        MEL,
        CAMILLE,
        MEGGIE,
        Joel
    ]

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(function(){
        gsap.to(ImageDivRef.current,{
            scrollTrigger:{
                trigger:ImageDivRef.current,
                start:'top 26%',
                end:'top -115%',
                pin:true,
                pinSpacing:true,
                pinReparent:true,
                pinType:'transform',
                scrub:1,
                onUpdate:(elem)=>{
                    let ImageIDX;
                    if(elem.progress<1){
                        ImageIDX = Math.floor(elem.progress * ImageArray.length)
                    }else {
                        ImageIDX = ImageArray.length - 1
                    }
                    ImageRef.current.src = ImageArray[ImageIDX]
                    
                }
            }
        })
    })
  return (
    <div>
      <div ref={ImageDivRef}  className='absolute h-[20vw] w-[15vw] top-[12vw] left-[27vw] select-none'>
        <img ref={ImageRef} className='rounded-2xl h-full w-full object-cover' src={Carl} alt="" />
      </div>
    </div>
  )
}

export default Image
