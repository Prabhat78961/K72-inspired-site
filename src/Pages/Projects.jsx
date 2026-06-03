import React from 'react'
import Cards from '../Components/Projects/Cards'
import skyinbag from '../assets/Images/Baginsky.jpg'
import thumbnail from '../assets/Images/Thumbnail.jpg'
import Jetski from '../assets/Images/WS---k72.ca---Thumbnail.jpg'
import beer from '../assets/Images/beer.jpg'
import best from '../assets/Images/best.jpg'
import cake from '../assets/Images/Cake.jpg'
import cap from '../assets/Images/cap.jpg'
import cat from '../assets/Images/cat.jpg'
import Choclate from '../assets/Images/Choclate.jpg'
import coke from '../assets/Images/coke.jpg'
import eye from '../assets/Images/eye.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import Navbar from '../Components/Navigations/Navbar'
import { Link } from "react-router-dom";

const Projects = () => {
  const Images = [
    {
      image1: skyinbag,
      image2: thumbnail
    },
    {
      image1: Jetski,
      image2: cake
    },
    {
      image1: eye,
      image2: Choclate
    },
    {
      image1: coke,
      image2: best
    },
    {
      image1: beer,
      image2: cap
    },
    {
      image1: cat 
    },
  ]
  return (
    <div>
      
    <div className='h-screen text-black p-4'>
      <div className='pt-[21vw]'>
        <h2 className='font-[Lausanne500] text-[9.5vw] uppercase'>projects</h2>
      </div>
      {Images.map(function(elem){
        return <Cards key={elem.image1} image1={elem.image1} image2={elem.image2} />
      })}
    </div>
    </div>
  )
}

export default Projects