import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { useRef } from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // Import arrow icons
import EmptyPic1 from "../assets/Images/Pillars/saravanan.jpg";
import EmptyPic2 from "../assets/Images/Pillars/naresh.jpg";
import EmptyPic3 from "../assets/Images/Pillars/santhosh.jpg";
import Aboutcardicon from "../assets/Images/about/aboutcardicon.png";
import React from "react";

    const EmployeeCard = ({
      id,
      ProfilePic,
      Name,
      title,
      exp,
      profession,
      icon,
      about1,
      about2,
      proficient,
      socialmedia,
      link,
    })=>{
      return(
        <div className='w-full h-full'>
            <Swiper>
                <SwiperSlide className='aboutExpCardContainer border-1 border-collapse border-gray-200'>
                <div className="md:flex items-start ">
            <div className="border-3 w-full h-full">
                <img src={ProfilePic} className="w-full h-full object-cover" alt="" />
            </div>
            <div>
                <div className="flex pl-40">
                    <p className="text-3xl md:text-5xl font-semibold text-slate-950 mr-2">
                {exp}+
                    </p>
                    <p className="w-20 text-sm font-medium">
                years of experience in {profession}
                    </p>
                    <img src={icon} className="w-20 h-16 inline" alt="" />
                </div>
                <div className="pl-10">
                  <h1 className="text-3xl font-semibold ">{Name}</h1>
                  <h2 className="text-[18px] font-semibold ">{title}</h2>
                  <p className="font-medium text-[15px] w-full  pt-2">
                    {about1}
                  </p>
                  <p className="font-medium text-[15px] w-full ">{about2}</p>
                  <p className="font-medium text-[15px]">Porficient in:</p>
                </div>    
            </div>
        </div>
        <div className="w-10/12 mt-10">
              {proficient.map((items, index) => (
                <span
                  className="border-1 mr-2 mb-2 border-black px-3 py-1 rounded-full font-bold text-[11px] inline-block uppercase"
                  key={index}
                >
                  {items}
                </span>
              ))}
            </div>
            <div className="mt-5">
              {socialmedia.map((items, index) => (
                <a
                  href={link}
                  className="inline-block text-2xl text-slate-950 mr-5 hover:scale-75 transition-transform duration-200"
                  key={index}
                >
                  {items}
                </a>
              ))}
            </div>
                </SwiperSlide>
            </Swiper>
        </div>
      )
    }

export default EmployeeCard;


// <button 
// onClick={handlePrev} 
// className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 z-50 hover:bg-gray-600 transition-all"
// aria-label="Previous Slide"
// >
// <AiOutlineLeft size={24} />
// </button>

// {/* Custom Right Arrow */}
// <button 
// onClick={handleNext} 
// className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 z-50 hover:bg-gray-600 transition-all"
// aria-label="Next Slide"
// >
// <AiOutlineRight size={24} />
// </button>