import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {
    const StairParent = useRef(null)
    const PageRef = useRef(null)
    const currentPath = useLocation().pathname
    useGSAP(function(){
    const tl = gsap.timeline()
        tl.to(StairParent.current,{
            display:'block'
        })
        tl.from('.Stair',{
            height:0,
            stagger:{
                amount:-0.25
            }
        })
        tl.to('.Stair',{
            y:'100%',
            stagger:{
                amount:-0.25
            }
        })
        tl.to(StairParent.current,{
            display:'none'
        })
        tl.to('.Stair',{
            y:'0%'
        })
        gsap.from(PageRef.current,{
            opacity:0,
            delay:1.3,
            scale:1.2
        })
    }, [currentPath])
  return (
    <div>
      <div ref={StairParent} className='h-screen w-screen flex fixed z-10 top-0'>
        <div className='h-full w-full flex'>
            <div className='Stair h-full w-1/5 bg-black'></div>
            <div className='Stair h-full w-1/5 bg-black'></div>
            <div className='Stair h-full w-1/5 bg-black'></div>
            <div className='Stair h-full w-1/5 bg-black'></div>
            <div className='Stair h-full w-1/5 bg-black'></div>
        </div>
      </div>
        <div ref={PageRef}>
            {props.children}
        </div>
    </div>
  )
}

export default Stairs
