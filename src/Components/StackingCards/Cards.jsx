'use client'
import { CgProfile } from "react-icons/cg";
import {motion,useScroll, useTransform} from "framer-motion"
import { useRef } from "react";
    const Cards = ({id,title,description1,description2,img,tags,progress,range,targetscale})=>{
      const scale = useTransform(progress,range,[1,targetscale])
    return(
        <motion.div style={{scale}} className="h-[100vh]  sticky top-0 flex items-center justify-center">
        <div className='bg-gray-500 flex flex-col md:flex-row items-center relative border border-dashed p-3 rounded-3xl'>
        <div className='w-full md:w-1/2 '>
        <img src={img} alt="" className='w-full h-full'/>
        </div>
        <div className='w-full md:w-1/2 '>
        <div className="flex items-center flex-wrap">
        {tags.map((tags,index)=>(
                <p key={index} className='px-3 w-fit py-2 border bg-[#f6f6fa]  rounded-lg text-sm mx-1'>{tags}</p>
            ))}
        </div>
            
            <p>{description1}</p>
            <p>{description2}</p>
            <div className='flex gap-x-5 items-center'>
                <CgProfile size={40}/>
                <div>
                    <p className='mb-0'>Dimitri Dumont</p>
                    <p className='mb-0'>Fondateur, Hexa Web</p>
                </div>
            </div>
        </div>
        </div>
        </motion.div>
        
    )
}
export default Cards;