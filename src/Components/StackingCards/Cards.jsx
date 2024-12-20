'use client'
import { CgProfile } from "react-icons/cg";
import {motion,useScroll, useTransform} from "framer-motion"
import { useRef } from "react";
    const Cards = ({id,title,description1,description2,name,prof,img,tags,progress,range,targetscale})=>{
        
      const scale = useTransform(progress,range,[1,targetscale])
    return(
        <motion.div style={{scale}} className="h-[100vh]  sticky top-0 flex  items-center justify-center">
        <div className='bg-white flex  flex-col md:flex-row md:items-start items-center relative border-[3px] border-dashed  p-2 rounded-3xl'>
        <div className='w-full md:w-1/2 '>  
        <img src={img} alt="" className='w-full h-full'/>
        </div>
        <div className='w-full md:w-1/2 pt-4'>
        <div className="flex items-center flex-wrap gap-2">
        {tags.map((tags,index)=>(
                <p key={index} className='px-[20px] w-fit py-[2px]  text-lg bg-[#f6f6fa] font-ContentText rounded-lg  mx-1'>{tags}</p>
            ))}
        </div>
            <div className="pt-2 font-ContentText text-lg">
            <p>{description1}</p>
            <p>{description2}</p>
 
            </div>
            <div className="pt-2">
                <button className="border px-3 py-2 rounded-md bg-darkblue text-white transition-all hover:rounded-tr-2xl hover:rounded-bl-2xl duration-700">Visit Site</button>
            </div>
            <div className='flex gap-x-5 items-center pt-4'>
                <CgProfile size={40}/>
                <div className="">
                    <p className='mb-0 text-xl font-bold text-gray-700'>{name}</p>
                    <p className='mb-0'>{prof}</p>
                </div>
            </div>
        </div>
        </div>
        </motion.div>
        
    )
}
export default Cards;