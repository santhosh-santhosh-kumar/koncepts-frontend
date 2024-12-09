import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { useRef } from 'react';
import { useEffect } from "react";
import AboutExpCard from "../Components/Aboutcomp/AboutExpCard";
import { AboutHero } from "../Components/Aboutcomp/AboutHero";
import { FaLinkedinIn } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import EmptyPic1 from "../assets/Images/Pillars/saravanan.jpg";
import EmptyPic2 from "../assets/Images/Pillars/naresh.jpg";
import EmptyPic3 from "../assets/Images/Pillars/santhosh.jpg";
import Aboutcardicon from "../assets/Images/about/aboutcardicon.png";
import MindsetCard from "../Components/Aboutcomp/Mindsetcards";
import { Link } from "react-router-dom";
import WorldClients from "../Components/Aboutcomp/Worldclients";
import ClientsCard from "../Components/Aboutcomp/Clientscard";
import { verticals } from "../Components/ServicesComp/Verticles";
import ReviewSlider from "../Components/Aboutcomp/ReviewSlider";
import { MdStar } from "react-icons/md";
import CustomerReview from "../Components/Aboutcomp/CustomerReview";
import StarRating from "../Components/Aboutcomp/StarRating";
import Counter from "../Components/Aboutcomp/RunningNumbers";
import TeamCard from "../Components/Aboutcomp/TeamCard";
import IAAS from "../assets/Images/about/iaas.png";
import sangumark from "../assets/Images/about/sangumak.png";
import maxima from "../assets/Images/about/maxima.png";
import infinityPotential from "../assets/Images/about/infinitePotential.png";
import soulfullSpace from "../assets/Images/about/soulful.png";
import PSCS from "../assets/Images/about/pscs-1.png";
import jathi from "../assets/Images/about/jathi.png";
import appDocker from "../assets/Images/about/appDocker.png";
import TAAS from "../assets/Images/about/taas.png";
import shazab from "../assets/Images/about/shazab-1.png";
import whichcourse from "../assets/Images/about/which.png";
import luckygame from "../assets/Images/about/lucky8games.png";
import { GoArrowRight } from "react-icons/go";
import { AiOutlineCamera } from "react-icons/ai";
import { GiDeadEye } from "react-icons/gi";
import { TbBrandAdonisJs } from "react-icons/tb";
import { BiBarChartAlt } from "react-icons/bi";
import { PiCodeBlockFill } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { useState } from "react";
import React from "react";

function EmployeCard(  {id,
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
    interval = 3000 
  }) {
  const employeeCard = [
    {
      id: 1,
      ProfilePic: EmptyPic1,
      Name: "Saravana Prabu",
      title: "Designer",
      exp: 6,
      profession: "design",
      icon: Aboutcardicon,
      about1:
        "Founder and lead designer at UXIS, specializes in deep UX/UI design for complex product interfaces. Achieving an 88% ",
      about2:
        'The author of the course "UX Thinking and Structuring Before Creating UI" and the winner of the Telegram ',
      proficient: [
        "finance",
        "banking",
        "telecommunication",
        "healthcare",
        "accessiblity",
        "travel and leisure",
        "ai chats",
        "other",
      ],
      socialmedia: [
        <FaLinkedinIn />,
        <SiInstagram />,
        <ImWhatsapp />,
      ],
    },
    {
        id:2,
        ProfilePic:EmptyPic2,
        Name:"Naresh",
        title:"Full Stack Developer",
        exp:1,
        profession:"design",
        icon:Aboutcardicon,
        about1:"Founder and lead designer at UXIS, specializes in deep UX/UI design for complex product interfaces. Achieving an 88%",
        about2:'The author of the course "UX Thinking and Structuring Before Creating UI" and the winner of the Telegram',
        proficient:['finance','banking','telecommunication','healthcare','accessiblity','travel and leisure','ai chats','other'],
        socialmedia:[<FaLinkedinIn/>,<SiInstagram/>,<ImWhatsapp/>]
    },        {
        id:3,
        ProfilePic:EmptyPic3,
        Name:"Santhosh",
        title:"Full Stack Developer",
        exp:1,
        profession:"design",
        icon:Aboutcardicon,
        about1:"A creative full-stack developer who thrives on pushing the boundaries of web development. Whether it’s  ",
        about2:'I’m not just a developer; I’m a problem solver, innovator, and dream builder. With a passion for crafting seamless digital experiences, ',
        proficient:['finance','banking','telecommunication','healthcare','accessiblity','travel and leisure','ai chats','other'],
        socialmedia:[<FaLinkedinIn/>,<SiInstagram/>,<ImWhatsapp/>]
    }
  ];
  const swiperRef = useRef(null);
  const handleClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

   
    return (
      <>
        <Swiper
      ref={swiperRef}
      onClick={handleClick}
      className='w-full h-full cursor-pointer slidercontainer'
      modules={[FreeMode, Pagination, Autoplay, Navigation]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      loop={true}
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
{employeeCard.map((value,index) => {
        return (
          <>
                  <SwiperSlide className="w-full h-full lg:flex md:flex justify-center items-center px-10 border-1 " key={index}>
            <div className="aboutExpCardContainer border-collapse border-gray-200">
              <div className="lg:flex md:flex items-start justify-between">
                
                  <div className="border-3 mt-0 w-full h-full ">
                    <img src={value.ProfilePic} className="w-full h-full object-cover" alt="" />
                  </div>
               

                <div>
                  <div className="flex pl-40">
                    <p className="text-3xl md:text-5xl font-semibold text-slate-950 mr-2">
                      {value.exp}+
                    </p>
                    <p className="w-20 text-sm font-medium">
                      <span className={`${value.id==1?"hidden":"visible"}`}>years</span><span className={`${value.id!==1?"hidden":"visible"}`}>months</span> of experience in {profession}
                    </p>
                    <img src={value.icon} className="w-20 h-16 inline" alt="" />
                  </div>
                  <div className="pl-10">
                    <h1 className="text-3xl font-semibold ">{value.Name}</h1>
                    <h2 className="text-[18px] font-semibold ">{value.title}</h2>
                    <p className="font-medium text-[15px] w-full  pt-2">
                      {value.about1}
                    </p>
                    <p className="font-medium text-[15px] w-full ">{value.about2}</p>
                    <p className="font-medium text-[15px]">Porficient in:</p>
                  </div>
                </div>
              </div>
              <div className="w-10/12 mt-10">
                {value.proficient.map((items, index) => (
                  <span
                    className="border-1 mr-2 mb-2 border-black px-3 py-1 rounded-full font-bold text-[11px] inline-block uppercase"
                    key={index}
                  >
                    {items}
                  </span>
                ))}
              </div>
              <div className="mt-5 lg:mb-0 md:mb-0 mb-10">
                {value.socialmedia.map((items, index) => (
                  <a
                    href={link}
                    className="inline-block text-2xl text-slate-950 mr-5 hover:scale-75 transition-transform duration-200"
                    key={index}
                  >
                    {items}
                  </a>
                ))}
              </div>
            </div>
            </SwiperSlide>
          </>
        );
        
      })}
      
    </Swiper>
    </>
  );
  }

export default EmployeCard;
