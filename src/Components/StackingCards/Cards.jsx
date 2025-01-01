'use client'
import { CgProfile } from "react-icons/cg";
import {motion,useScroll, useTransform} from "framer-motion"
import { useRef } from "react";
    const Cards = ({id,title,description1,description2,name,prof,img,tags,progress,range,targetscale,site})=>{
        
      const scale = useTransform(progress,range,[1,targetscale])
    return(
        <motion.div style={{scale}} className="h-auto py-10 sticky top-0 flex items-center justify-center">
            <div className='bg-white flex flex-col md:flex-row md:items-start items-center border-[3px] border-dashed rounded-tl-lg rounded-br-lg rounded-tr-[30px] rounded-bl-[30px]'>
                <div className='w-full md:w-1/2'>  
                    <img src={img} alt="" className='w-full h-full'/>
                    <div className="pt-2 px-5 md:px-0 block md:hidden py-2">
                        <a href={site} target="_blank"><button className="border-4 border-dashed px-3 py-2 rounded-md text-darkblue  transition-all hover:rounded-tr-2xl hover:rounded-bl-2xl duration-700">Visit Site</button></a>
                    </div>
                </div>
                <div className='w-full md:w-1/2 p-5 md:pr-10 text-justify pt-4'>
                    <div className="flex items-center flex-wrap gap-2">
                    {tags.map((tags,index)=>(
                            <p key={index} className='px-[20px] w-fit py-[2px] text-sm md:text-lg bg-[#f6f6fa] font-ContentText rounded-lg mx-1'>{tags}</p>
                        ))}
                    </div>
                    <div className="pt-2 font-ContentText text-sm md:text-lg">
                        <p>{description1}</p>
                        <p>{description2}</p>
                    </div>
                    <div className='flex gap-x-5 items-center pt-4'>
                        <CgProfile className="text-3xl md:text-5xl"/>
                        <div className="">
                            <p className='mb-0 text-sm md:text-xl font-bold text-gray-700'>{name}</p>
                            <p className='mb-0 text-sm md:text-lg'>{prof}</p>
                        </div>
                    </div>
                    <div className="pt-2 hidden md:block py-2">
                        <a href={site} target="_blank"><button className="border border-dashed border-gray-400 px-3 py-2 rounded-md text-darkblue transition-all hover:rounded-tr-2xl hover:rounded-bl-2xl duration-700">Visit Site</button></a>
                    </div>
                </div>
            </div>
        </motion.div>
        
    )
}
export default Cards;