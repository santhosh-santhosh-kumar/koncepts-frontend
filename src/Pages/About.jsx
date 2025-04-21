import React, { useState } from 'react';
import AboutExpCard from "../Components/Aboutcomp/AboutExpCard";
import EmployeCard from "../Components/Aboutcomp/EmployeCard";
import { AboutHero } from "../Components/Aboutcomp/AboutHero";
import { FaLinkedinIn } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";
import SridharNatrajanImg from "../assets/Images/Pillars/sridharnatarajan.webp";
import MindsetCard from "../Components/Aboutcomp/Mindsetcards";
import { Link, useNavigate } from "react-router-dom";
import WorldClients from "../Components/Aboutcomp/Worldclients";
import ClientsCard from "../Components/Aboutcomp/Clientscard";
import { verticals } from "../Components/ServicesComp/Verticles";
import ReviewSlider from "../Components/Aboutcomp/ReviewSlider";
import { MdStar } from "react-icons/md";
import CustomerReview from "../Components/Aboutcomp/CustomerReview";
import StarRating from "../Components/Aboutcomp/StarRating";
import Counter from "../Components/Aboutcomp/RunningNumbers";
import IAAS from "../assets/Images/about/IAASAcademy.webp";
import sangumark from "../assets/Images/about/sangumak.webp";
import maxima from "../assets/Images/about/Maxima.webp";
import infinityPotential from "../assets/Images/about/infinitePotential.webp";
import soulfullSpace from "../assets/Images/about/SoulfulSpaces.webp";
import PSCS from "../assets/Images/about/pscs.webp";
import jathi from "../assets/Images/about/JathiShruthi.webp";
import appDocker from "../assets/Images/about/appDocker.webp";
import TAAS from "../assets/Images/about/TechAsAService.webp";
import shazab from "../assets/Images/about/shazab.webp";
import whichcourse from "../assets/Images/about/WhichCourse.webp";
import luckygame from "../assets/Images/about/lucky8games.webp";
import { GoArrowRight } from "react-icons/go";
import Uxdesign from "../assets/animated-icons/about/ux-design.webm";
import brand from "../assets/animated-icons/about/globe-earth.webm";
import html from "../assets/animated-icons/about/html.webm";
import chart from "../assets/animated-icons/about/line-chart.webm";
import responsive from "../assets/animated-icons/about/responsive.webm";
import camera from "../assets/animated-icons/about/camera.webm";
import witness from "../assets/animated-icons/about/witness.webm";
import travel1 from "../assets/Images/Business Domains/Travel.webp";
import travel2 from "../assets/Images/Business Domains/E-commerce.webp";
import travel3 from "../assets/Images/Business Domains/Hospitality.webp";
import travel4 from "../assets/Images/Business Domains/Real-Estate.webp";
import travel5 from "../assets/Images/Business Domains/Retail.webp";
import travel6 from "../assets/Images/Business Domains/Automotive.webp";
import travel7 from "../assets/Images/Business Domains/Health-Care.webp";
import travel8 from "../assets/Images/Business Domains/Education.webp";
import travel9 from "../assets/Images/Business Domains/events.webp";


const About = () => {
  const navgate = useNavigate();
  let content1="We bring your travel vision to life with cutting-edge web development solutions designed to engage, inspire, and convert visitors into loyal customers.";
  let content2="From user-friendly booking systems to stunning designs, we build travel websites that deliver.";
  let content3="From user-friendly booking systems to stunning designs, we build travel websites that deliver."
  const [text1, setText1] = useState(content1);
  const [text2, setText2] = useState(content2);
  const [text3, setText3] = useState(content3);
  const [image, setImage] = useState(travel1);
  const [color, setColor] = useState(0);

const handleMouseEnter=(id)=>{
  domains.map((value)=>{
    if(value["id"]==id){
      setImage(value["img"])
      setText1(value["content1"])
      setText2(value["content2"])
      setText3(value["content3"])
    }
  })
}
  
const handleChangeColor=(id)=>{
  setColor(id-1)
}
  const domains=[
    {
      id:1,
      title:"Travel",
      content1:"TejusDigi specializes in creating innovative website designs for the travel industry, enhancing digital presence and user experience with customized solutions that drive business growth and operational efficiency.",
      content2:"We created a dynamic website design that strengthens J&J Trading's global logistics operations and client connections.",
      img:travel1

    },
    {
      id:2,
      title:"E-commerce",
      content1:"We, TejusDigi, specialize in e-commerce website design, creating visually appealing and functional platforms for businesses, enhancing online presence and user engagement.",
      content2:"We designed a custom website for Sangumark, showcasing products and improving global consumer interaction.",
      img:travel2

    },
    {
      id:3,
      title:"Hospitality",
      content1:"TejusDigi specializes in creating customized website designs for the hospitality industry, enhancing guest experiences, and improving online bookings.",
      content2:"We focus on combining functionality with aesthetics to provide seamless navigation, engaging visuals, and robust features for hotels, resorts, and more.",
      img:travel3

    },
    {
      id:4,
      title:"Real Estate",
      content1:"We excel in creating innovative website designs for the real estate industry, delivering functional, visually appealing real estate platforms that enhance user experience and drive business growth.",
      content2:"We have created a user-friendly, visually stunning website for Archivite. to showcase real estate listings and improve client engagement.",
      img:travel4

    },
    {
      id:5,
      title:"Retail",
      content1:"We specialize in website design, branding, and digital marketing for the retail industry, creating seamless, visually engaging platforms that boost brand identity, user experience, and customer engagement.",
      content2:"We designed a user-friendly website, managed branding, and optimized Zha Supermarket's Instagram presence.",
      img:travel5

    },
    {
      id:6,
      title:"Automotive",
      content1:"We created a creative dynamic website design for the automotive industry, which created innovative, user-friendly, and creative dynamic website design for the automotive industry platforms that will enhance online presence drive customer engagement, and facilitate business in the automotive industry seamless navigation.",
      content2:"We designed a modern website for Proteck.co. with enhanced user experience and integrated features to promote automotive services.",
      img:travel6

    },
    {
      id:7,
      title:"Health Care",
      content1:"We specialize in Custom website development for healthcare-oriented platforms ensuring the best accessibility, functionality, and communication across all devices.",
      content2:"We designed a user-friendly, informative website for Dr. Ashok Kumar that would help his patients stay engaged and connected with their healthcare service providers.",
      img:travel7

    },
    {
      id:8,
      title:"Education",
      content1:"For the education industry, we designed visually appealing, engaging websites that serve as functional platforms that enhance the learning experience and facilitate communication between students, parents, and staff.",
      content2:"A User-friendly website is created for Oasis Public School to showcase school information, promote engagement, and facilitate communication",
      img:travel8

    }
    ,{
      id:9,
      title:"Event",
      content1:"TejusDigi specializes in creating dynamic website designs for the event industry, offering visually captivating, user-friendly platforms that help event organizers showcase their services, engage with clients, and streamline event management processes.",
      content2:"We designed an interactive website for Team 6teen that effectively highlights Team 6teen's events and enhances user engagement.",
      img:travel9

    }
  ]

 
  
  const ExperienceCard = [
    {
      id: 1,
      ProfilePic: SridharNatrajanImg,
      Name: "Sridhar Natrajan",
      title: "Founder, UX/UI LEAD",
      exp: 15,
      profession: "design",
      about1:
        "Founder and lead designer at UXIS, specializes in deep UX/UI design for complex product interfaces. Achieving an 88% success rate in planned KPIs after redesigns.",
      about2:
        'The author of the course "UX Thinking and Structuring Before Creating UI" and the winner of the Telegram competition for redesigning the Android app.',
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
        {icon:<FaLinkedinIn />,link:""},
        {icon:<SiInstagram />,link:""},
        {icon:<ImWhatsapp />,link:""},
      ],
    },
  ];



  const MindSet = {
    Part1: [
      {
        id: 1,
        icon: Uxdesign ,
        title: "UX Research",
        details:
          "Our UX designers focus on crafting products that deliver the optimal user experience. Through thorough research, including primary studies, design, and collaboration with product management and development, our UX researchers uncover what consumers truly need from a business’s products.",
      },
      {
        id: 2,
        icon: brand,
        title: "Brand Identity",
        details:
          "We concentrate on defining the brand’s vision, culture, positioning, personality, relationships, and presentations. Our team dives deep into understanding the emotions, expectations, and perceptions of the target market to shape a strong and consistent brand identity.",
      },
      {
        id: 3,
        icon: html,
        title: "Web Development",
        details:
          "We create web applications using the latest technologies, ensuring websites are visually appealing, fast, and perform seamlessly. Our focus on web development includes coding and markup, designed for smooth user experiences.",
      },
      {
        id: 4,
        icon: chart,
        title: "Business Strategy",
        details:
          "Our business strategy consists of competitive actions and decisions that attract customers, foster competition, enhance performance, and achieve organizational goals, paving the way for long-term success.",
      },
    ],
    part2: [
      {
        id: 6,
        icon: responsive,
        title: "Web Design",
        details:
          "Our web designers are responsible for the creation, layout, and coding of websites, blending technical expertise with graphic design to deliver stunning and functional sites.",
      },

      {
        id: 8,
        icon: camera,
        title: "Photography",
        details:
          "Our professional photographers prioritize capturing high-quality images. They travel to various locations for photoshoots, setting up shots in natural and studio environments to produce captivating visuals.",
      },
    ],
  };
  const Clientslogo = {
    part1: [
      { id: 1, logo: IAAS, link:"https://iaasacademy.com/" },
      { id: 2, logo: PSCS, link:"https://pscs.in/" },
      { id: 3, logo: shazab, link:"https://shazab.in/" },
      { id: 4, logo: infinityPotential, link:"https://www.infinitepotentials.in/" },
    ],
    part2: [
      { id: 5, logo: soulfullSpace, link:"" },
      { id: 6, logo: sangumark, link:"https://www.sangumark.in/" },
      { id: 7, logo: jathi, link:"" },
      { id: 8, logo: appDocker, link:"https://appsdocker.com/" },
    ],
    part3: [
      { id: 9, logo: TAAS, link:"https://techasasrvc.com/" },
      { id: 10, logo: maxima, link:"https://www.maximaautomation.co.in" },
      { id: 11, logo: whichcourse, link:"" },
      { id: 12, logo: luckygame, link:"" },
    ],
  };

  const customerreview = {
    part1reviews: [
      {
        id: 1,
        review1: 'We hereby share our appreciation to TejusDigi IT Solutions for an outstanding job in creating an excellent Logo.Similarly, they designed a world-class business card and Book cover.....',
        reviewer: "Senthil Raj",
        des: "Infinite Potentials",
        img:witness
      },
      {
        id: 2,
        review1: 'I am really happy with your service, it is exceptional, TejusDigi Design and Developments is just great.',
        // review2:"Sridhar is an outstanding customer focused individual. TejusDigi is very professional and their knowledge is incredible, they also solve problems very fast. Sridhar has been managing our website post the design and development…",
        review3:"We are looking forward to getting into new venues of Digital Marketing.....",
        //  along with them… Great work TejusDigi and Sridhar…",
        reviewer: "Mohammed Kalimullah",
        des: "Shazab Futuretech Solutions ",
        img:witness
      },
      {
        id: 3,
        review1: 'TejusDigi IT solution’s topmost priority is customer satisfaction. They never tire of designing options till they satisfy us – that too with a smile. All the best TejusDigi......',
        reviewer: "Rajesh Daswani",
        des: "IAAS Academy",
        img:witness
      },
    ],
    part1ratings: [
      {
        id: 1,
        rating: "5.0",
        stars: [
          <MdStar size={25} />,
          <MdStar size={25} />,
          <MdStar size={25} />,
          <MdStar size={25} />,
          <MdStar size={25} />,
        ],
        quality: "5.0",
        schedule: "5.0",
        cost: "5.0",
        Will2Ref: "5.0",
      },
    ],
  };

  return (
    <div className="pt-20 bg-gray-50">
      {/* hero section */}
      <AboutHero />
      {/* Exp card */}
      <div id="team" className="grid grid-cols-1 md:grid-cols-2 border-t border-b border-gray-200">
        {ExperienceCard.map((items, index) => {
          return (
            <>
              <div key={index}>
                <AboutExpCard key={index} {...items} />
              </div>
            </>
          );
        })}

          <EmployeCard/>
      </div>
      {/* our mindset */}
      <div className="w-full md:flex">
        <div className="aboutExpCardContainer w-full md:w-1/2 my-auto">
          <h1 className="font-Heading text-6xl font-bold text-darkblue">
            Building the future
          </h1>
          <p className="font-medium font-ContentText text-[15px] pt-4">
          Creativity and critical thinking are vital for business success, and we apply them strategically to 
          capture our target audience’s attention, keeping them engaged from start to finish. Creativity takes 
          many forms, and the more we harness it, the further our reach.
          </p>
          <p className="font-medium font-ContentText text-[15px] pt-4">
          We set clear goals at the outset and ensure they are achieved by the end. Thinking outside the box is 
          essential, along with effectively communicating our ideas to make a lasting impact.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {MindSet.Part1.map((items, index) => {
              return <MindsetCard key={index} {...items} />;
            })}
          </div>
        </div>
      </div>
      {/* we share same review */}
      <div className="w-full md:flex">
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {MindSet.part2.map((items, index) => {
              return <MindsetCard key={index} {...items} />;
            })}
          </div>
        </div>
        <div className="w-full md:w-1/2 border border-gray-200">
          <div className="w-full h-full">
            <ReviewSlider />
          </div>
        </div>
      </div>
      <div className="w-full md:flex">
        <div className="w-full md:w-1/2 aboutExpCardContainer my-auto border border-gray-200 border-separate">
          <h3 className="font-ContentText text-lg font-bold pb-4 text-darkblue">
            Our Superpowers
          </h3>
          <h1 className="font-Heading text-6xl font-bold leading-tight">
            We just doing what others don't
          </h1>
          <p className="font-medium text-[15px] pt-4">
            We prioritize robust UX structuring before wireframing and validate
            our hypotheses with real user testing to continually enhance our
            designs.
          </p>
          <div className="flex flex-col md:flex-row gap-3 mt-10 items-center">
            <Link
              to={"/services"}
              className="w-fit text-darkblue border-2 border-gray-400 border-dashed bg-white no-underline px-5 py-3 flex items-center gap-3 hover:rounded-br-lg rounded-md hover:rounded-tl-lg hover:rounded-tr-3xl hover:rounded-bl-3xl transition-all duration-700"
            >
              <span className="font-ContentText font-semibold">
                Explore Our Services
              </span>
              <GoArrowRight size={25} className=""/>
            </Link>
            <Link
              to={"/portfolio"}
              className=" bg-darkblue text-white w-fit no-underline px-5 py-3 flex items-center gap-3 hover:rounded-br-lg hover:rounded-tl-lg hover:rounded-tr-3xl rounded-md hover:rounded-bl-3xl transition-all duration-700"
            >
              <span className="font-ContentText font-semibold">
                Explore Our Portfolio
              </span>
              <GoArrowRight size={25} className="text-white" />
            </Link>
          </div>
        </div>
      </div>
      {/* our clients all over world */}
      {/* <WorldClients/> */}
      {/* our clients some of them */}
      <div className="w-full md:flex border border-gray-200">
        <div className="aboutExpCardContainer w-full md:w-1/2 mt-2">
          <h3 className="font-ContentText text-lg font-bold pt-10 text-darkblue">
            Our Clients
          </h3>
          <h1 className="font-Heading text-6xl font-bold pt-2">Some Of Them</h1>
          <p className="font-medium text-[15px] pt-2 w-full lg:w-5/6">
            We are working with a diverse range of clients, spanning from
            globally renowned entities with millions of users to innovative
            startups seeking for MVP design solutions.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-2">
            {Clientslogo.part1.map((items, index) => {
              return <ClientsCard key={index} {...items} />;
            })}
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {Clientslogo.part2.map((items, index) => {
            return <ClientsCard key={index} {...items} />;
          })}
        </div>
      </div>
      {/* business domains */}
      <div className="w-full md:flex border border-gray-200">
        <div className="w-full  ">
          <div className="grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2">
            {Clientslogo.part3.map((items, index) => {
              return <ClientsCard key={index} {...items} />;
            })}
          </div>
        </div>
      </div>

      <div className="w-full md:w-full pt-10 px-5">
          <div>
            <h1 className='font-Heading text-3xl md:text-6xl font-bold'>Business Domains</h1>
            <p className="font-medium text-[15px] pt-2">
              We boast extensive experience with products and projects across
              various business niches, including
            </p>
          </div>
          <div className='flex items-start py-10'>
          <div className="w-2/3 lg:flex md:flex">
            <div className="w-1/3 lg:p-0 p-2">
              {" "}
              {verticals.map(({ title,id }, index) => {
                return (
                  <span
                  
                    onMouseEnter={() => handleMouseEnter(id)}
                    onClick={()=>handleChangeColor(id)}
                    key={index}
                    className={`${index==color?"bg-darkblue text-white":""} border-1 w-40 lg:mr-2 mb-2 border-black lg:px-4  py-2 px-4  rounded-lg font-bold text-[14px] text-center tracking-widest block uppercase hover:bg-yellow-400 hover:text-white`}
                  >
                    {title}
                  </span>
                );
              })}
            </div>
            <div className="w-2/3">
                <h2>{domains["title"]}</h2>
                <div className="w-full">
                <p className="font-semibold pb-2">{text1}</p>
                <p className="font-semibold pb-2">{text2}</p>
                <p className="font-semibold">{text3}</p>
                </div>
            </div>
          </div>
          <div className="w-1/3 lg:pl-10 md:pl-10 flex items-center justify-center object-cover  md:w-7/12 lg:w-7/12">
              <div className="w-full border" >
                <img src={image} alt="" />
              </div>
          </div>
          </div>
      </div>
      {/* what clients says */}
      <div className="w-full md:flex border">
        <div className="aboutExpCardContainer w-full md:w-1/2 my-auto">
          <h3 className="font-ContentText text-lg font-bold pb-2 text-darkblue">
            Clients Reviews
          </h3>
          <h1 className="font-Heading text-6xl font-bold">What they say</h1>
        </div>
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {customerreview.part1reviews.map((items, index) => (
              <div key={index} className="w-full">
                <CustomerReview {...items} />
              </div>
            ))}
            {customerreview.part1ratings.map((items, index) => (
              <div className="w-full" key={index}>
                <StarRating {...items} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Counter />
    </div>
  );
};
export default About;