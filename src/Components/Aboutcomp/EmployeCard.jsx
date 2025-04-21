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
import SaravanaPrabuImg from "../../assets/Images/Pillars/saravanan.webp";
import NareshImg from "../../assets/Images/Pillars/naresh.jpg";
import SanthoshImg from "../../assets/Images/Pillars/santhosh.jpg";
import Muthuvel from "../../assets/Images/Pillars/muthuvel.webp";

    const EmployeeCard = ()=>{
      const employeeCard = [
        {
          id: 1,
          ProfilePic: SaravanaPrabuImg,
          Name: "Saravana Prabu",
          title: "CEO",
          exp: 1,
          profession: "D & D",
          about1: "As the CEO of a dynamic design and development company, I thrive on turning ideas into impactful realities. At the heart of my leadership is a commitment to blending creativity with precision, ensuring every project not only meets but exceeds expectations. Whether you are building a brand from the ground up or elevating your existing identity, my team and I are here to deliver excellence.",
          about2:"Let’s design the future, together" ,
          proficient: ["Digital Marketing","finance", "telecommunication", "Brand Identity", "Business Strategy", "Designing", "SEO"],
          socialmedia: [
            {icon:<FaLinkedinIn />,link:""},
            {icon:<SiInstagram />,link:""},
            {icon:<ImWhatsapp />,linl:""},
        ],
        },
        {
          id: 2,
          ProfilePic: NareshImg,
          Name: "Naresh",
          title: "Full Stack Developer",
          exp: 1,
          profession: "design",
          about1: "A creative full-stack developer who thrives on pushing the boundaries of web development.",
          about2: 'I’m not just a developer; I’m a problem solver, innovator, and dream builder.',
          proficient: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React JS', 'Node JS', 'Express JS', 'MySql', 'MongoDB', 'Git and Github'],
          socialmedia: [
          {icon:<FaLinkedinIn />,link:""},
          {icon:<SiInstagram />,link:""},
          {icon:<ImWhatsapp />,link:""}
          ]
        },
        {
          id: 3,
          ProfilePic: SanthoshImg,
          Name: "Santhosh",
          title: "Full Stack Developer",
          exp: 1,
          profession: "design",
          about1: "A passionate and skilled professional excelling in creative design, video production, data analysis, and user experience design. With a diverse set of abilities, I craft engaging visuals, insightful data solutions, and intuitive interfaces to help businesses thrive.",
          about2: 'I’m not just a developer; I’m a problem solver, innovator, and dream builder.',
          proficient: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React JS', 'Node JS', 'Express JS', 'MySql', 'MongoDB', 'Git and Github'],
          socialmedia: [
            {icon:<FaLinkedinIn />,link:""},
            {icon:<SiInstagram />,link:""},
            {icon:<ImWhatsapp />,linl:""},
        ]
        },
        {
          id: 4,
          ProfilePic: Muthuvel,
          Name: "Muthuvel",
          title: "Designer",
          exp: 1,
          profession: "design",
          about1: "A creative full-stack developer who thrives on pushing the boundaries of web development. Whether it’s building dynamic front-end experiences or optimizing back-end systems, I love blending innovation with functionality to create applications that stand out.",
          about2: 'With a keen eye for detail and a user-first approach, I excel in creating intuitive interfaces that enhance experiences and drive results.',
          proficient: ['photoshop', 'illustrator', 'design', 'video editing', 'data analyist', 'UI/UX design'],
          socialmedia: [
            {icon:<FaLinkedinIn />,link:""},
            {icon:<SiInstagram />,link:""},
            {icon:<ImWhatsapp />,linl:""},
        ]
        }
        
      ];
      const swiperRef = useRef(null);
      const handleClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slideNext();
        }
      };
      return(
        <div className='w-full h-full relative'>
          <Swiper
          ref={swiperRef}
          onClick={handleClick}
          className='border-1 border-collapse border-gray-200 w-full h-full slidercontainer'
          modules={[FreeMode, Pagination, Autoplay, Navigation]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          loop={true}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter:true
          }}
           >
            {
              employeeCard.map(({id,ProfilePic,Name,title,exp,profession,icon,about1,about2,proficient,socialmedia})=>{
                return(
                  <SwiperSlide className='w-full h-full py-3 px-3 border-b border-gray-200'>
                    <div className="flex flex-col md:flex-row justify-between items-start w-full text-gray-600">
                  <div className="w-full md:w-5/12 border-3">
                    <img className="w-full h-full" src={ProfilePic} alt="" />
                  </div>
                  <div className="w-full md:w-7/12">
                    <div className="pl-0 md:pl-10 flex items-center justify-start md:justify-end">
                      <p className="text-3xl md:text-5xl font-semibold text-slate-700 mr-2">
                        {exp}+
                            </p>
                            <p className="w-20 text-sm font-medium">
                        years of experience in {profession}
                            </p>
                    </div>
                    <div className="pl-0 md:pl-10">
                        <h1 className="text-3xl font-semibold ">{Name}</h1>
                        <h2 className="text-[18px] font-semibold ">{title}</h2>
                        <p className="font-medium text-[15px] w-full  pt-2">
                          {about1}
                        </p>
                        <p className="font-medium text-[15px] w-full ">{about2}</p>
                      </div>
                  </div>
        </div>
        <div className="w-10/12 mt-5">
        <p className="font-ContentText text-gray-600 text-[15px]">Porficient in:</p>
              {proficient.map((items, index) => (
                <span
                  className="border-1 mr-2 mb-2 border-gray-600 px-3 py-1 rounded-full font-bold text-[11px] inline-block uppercase text-gray-600"
                  key={index}
                >
                  {items}
                </span>
              ))}
        </div>
        <div className="mt-4">
              {socialmedia.map((items, index) => (
                <a
                  href={items.link}
                  className="inline-block text-2xl text-slate-600 mr-5 hover:scale-75 transition-transform duration-200 "
                  key={index}
                >
                  {items.icon}
                </a>
              ))}
            </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      )
    }

export default EmployeeCard;

// aboutExpCardContainer


