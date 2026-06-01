import React, { useContext, useRef, useEffect } from 'react'
import SkyBag from '../../assets/Images/Baginsky.jpg'
import Thumbnail from '../../assets/Images/Thumbnail.jpg'
import Camille from '../../assets/Images/CAMILLE_480X640_2.jpg'
import Meggie from '../../assets/Images/MEGGIE_480X640_2.jpg'
import PcHands from '../../assets/Images/pc-hand.jpg'
import pic2 from '../../assets/Images/hands.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation, useNavigate } from 'react-router-dom'
import { NavBarContext } from '../../Context/NavContext'

const Fullscreen = () => {
  const [navOpen, setnavOpen] = useContext(NavBarContext)
  const FullNav = useRef(null)
  const FullScreenRef = useRef(null)
   useGSAP(function(){
      const tl = gsap.timeline()
          tl.from('.Stairing',{
              height:0,
              stagger:{
                  amount:-0.25
              }
          })
          tl.from(FullNav.current,{
            opacity:0
          })
          tl.from('.link',{
            opacity:0,
            rotateX:90,
            stragger:{
              amount:0.2
            }
          })
          tl.pause()

          if (navOpen) {
            FullScreenRef.current.style.display = 'block'
            tl.play()
          }else{
            FullScreenRef.current.style.display = 'none'
            tl.reverse()
          }
      })
  return (
    <div ref={FullScreenRef} className='hidden h-screen absolute w-full overflow-x-hidden overflow-y-hidden select-none z-50'>
      <div className='h-screen w-full fixed'>
        <div className='h-full w-full flex'>
            <div className='Stairing h-full w-1/5 bg-black'></div>
            <div className='Stairing h-full w-1/5 bg-black'></div>
            <div className='Stairing h-full w-1/5 bg-black'></div>
            <div className='Stairing h-full w-1/5 bg-black'></div>
            <div className='Stairing h-full w-1/5 bg-black'></div>
        </div>
      </div>
      <div ref={FullNav} className='relative'>
        <div className='flex w-full justify-between p-2 items-start'>
        <div className='w-[10vw]'>
        <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                      <path fillRule="evenodd" fill='white' d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
        </svg>
      </div>
      <div onClick={()=>{setnavOpen(false)}} className='h-28 w-30 relative cursor-pointer'>
        <div className='z-10 h-[12vw] w-[0.2vw] absolute origin-top -rotate-45 bg-[#50fdcf]'></div>
        <div className='h-[12vw] w-[0.2vw] right-0 absolute origin-top rotate-45 bg-[#50fdcf]'></div>
      </div>
      </div>
      <div className='py-2'>
        <div className='link origin-top border-t hover:cursor-pointer relative overflow-hidden'>
          <h1 className='font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-4 uppercase'>Work</h1>
          <div className='moveLink absolute flex h-[15vw] top-[-4vw] text-black transition-all'>
            <div className='moveX flex items-center bg-[#50fdcf]'>
              <h2 className='whitespace-nowrap font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-6 uppercase'>See Everything</h2>
              <img className='h-[7vw] shrink-0 rounded-full w-[16vw] object-cover pt-2' src={SkyBag} alt="" />
              <h2 className='whitespace-nowrap font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-6 uppercase'>See Everything</h2>
              <img className='h-[7vw] shrink-0 rounded-full w-[16vw] object-cover pt-2' src={Thumbnail} alt="" />
            </div>
            <div className='moveX flex items-center bg-[#50fdcf]'>
              <h2 className='whitespace-nowrap font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-6 uppercase'>See Everything</h2>
              <img className='h-[7vw] shrink-0 rounded-full w-[16vw] object-cover pt-2' src={SkyBag} alt="" />
              <h2 className='whitespace-nowrap font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-6 uppercase'>See Everything</h2>
              <img className='h-[7vw] shrink-0 rounded-full w-[16vw] object-cover pt-2' src={Thumbnail} alt="" />
            </div>
          </div>
        </div>
        <div className='link origin-top border-t hover:cursor-pointer relative overflow-hidden'>
          <h1 className='font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-4 uppercase'>Agency</h1>
          <div className='moveLink absolute flex h-[15vw] top-[-4vw] text-black transition-all'>
            <div className='moveX flex items-center bg-[#50fdcf]'>
              <h2 className='whitespace-nowrap font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-6 uppercase'>Know us</h2>
              <img className='h-[7vw] shrink-0 rounded-full w-[16vw] object-cover pt-2' src={Camille} alt="" />
              <h2 className='whitespace-nowrap font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-6 uppercase'>Know us</h2>
              <img className='h-[7vw] shrink-0 rounded-full w-[16vw] object-cover pt-2' src={Meggie} alt="" />
            </div>
            <div className='moveX flex items-center bg-[#50fdcf]'>
              <h2 className='whitespace-nowrap font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-6 uppercase'>Know us</h2>
              <img className='h-[7vw] shrink-0 rounded-full w-[16vw] object-cover pt-2' src={Camille} alt="" />
              <h2 className='whitespace-nowrap font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-6 uppercase'>Know us</h2>
              <img className='h-[7vw] shrink-0 rounded-full w-[16vw] object-cover pt-2' src={Meggie} alt="" />
            </div>
          </div>
        </div>
        <div className='link origin-top border-t hover:cursor-pointer relative overflow-hidden'>
          <h1 className='font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-4 uppercase'>Contact</h1>
          <div className='moveLink absolute flex h-[15vw] top-[-4vw] text-black transition-all'>
            <div className='moveX flex items-center bg-[#50fdcf]'>
              <h2 className='whitespace-nowrap font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-6 uppercase'>Send us a fax&nbsp;&nbsp;&nbsp;&nbsp; </h2>
              <h2 className='whitespace-nowrap font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-6 uppercase'>Send us a fax&nbsp;&nbsp;&nbsp;&nbsp; </h2>
            </div>
            <div className='moveX flex items-center bg-[#50fdcf]'>
              <h2 className='whitespace-nowrap font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-6 uppercase'>Send us a fax&nbsp;&nbsp;&nbsp;&nbsp; </h2>
              <h2 className='whitespace-nowrap font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-6 uppercase'>Send us a fax&nbsp;&nbsp;&nbsp;&nbsp; </h2>
            </div>
          </div>
        </div>
        <div className='link origin-top border-y hover:cursor-pointer relative overflow-hidden'>
          <h1 className='font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-4 uppercase'>Blog</h1>
          <div className='moveLink absolute flex h-[15vw] top-[-4vw] text-black transition-all'>
            <div className='moveX flex items-center bg-[#50fdcf]'>
              <h2 className='whitespace-nowrap font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-6 uppercase'>See Everything</h2>
              <img className='h-[7vw] shrink-0 rounded-full w-[16vw] object-cover pt-2' src={PcHands} alt="" />
              <h2 className='whitespace-nowrap font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-6 uppercase'>See Everything</h2>
              <img className='h-[7vw] shrink-0 rounded-full w-[16vw] object-cover pt-2' src={pic2} alt="" />
            </div>
            <div className='moveX flex items-center bg-[#50fdcf]'>
              <h2 className='whitespace-nowrap font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-6 uppercase'>See Everything</h2>
              <img className='h-[7vw] shrink-0 rounded-full w-[16vw] object-cover pt-2' src={PcHands} alt="" />
              <h2 className='whitespace-nowrap font-[Lausanne500] text-[8vw] text-center leading-[0.8] pt-6 uppercase'>See Everything</h2>
              <img className='h-[7vw] shrink-0 rounded-full w-[16vw] object-cover pt-2' src={pic2} alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Fullscreen
