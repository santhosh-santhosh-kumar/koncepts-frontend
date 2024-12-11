import React from 'react'
import downarrow from "../../assets/animated-icons/services/Downarrow.gif"
import { FaArrowDown } from "react-icons/fa6";
export const AboutHero = () => {
  const moveteam=()=>{
      const teamSection = document.getElementById('team');
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: 'smooth' });
      }
  }
  return (
    <div className='w-full h-screen md:pt-20 flex flex-col text-center'>
      <div className=' md:pt-10'>
        <p className='font-ContentText text-lg font-bold'>Who We Are</p>
      </div>
      <div>
        <h1 className='mx-auto font-Heading abouttext  lg:text-5xl'>We are a remote design team with strong experience <span className='block mt-6'>in creating UX/UI solutions</span></h1>
      </div>
      <div className='md:py-40 py-20'>
          <button onClick={moveteam} className='border-2 border-dashed border-gray-400 w-fit mx-auto rounded-lg p-3 flex items-center transition-all duration-300 hover:rounded-tr-3xl hover:rounded-bl-3xl'>
            <span className='font-ContentText text-xl font-semibold text-gray-500 pr-2'>Leadership Team</span>
            {/* <img src={downarrow} alt="Downarrow" className='text-darkblue'/> */}
            <FaArrowDown  className='animate-bounce w-5 h-5 text-darkblue mt-2'/>
          </button>
      </div>
    </div>
  )
}
