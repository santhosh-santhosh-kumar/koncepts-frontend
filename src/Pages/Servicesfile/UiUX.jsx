import { FaRegCircleCheck } from "react-icons/fa6";
import { Services } from "../../Components/Navbar/ResponsiveNavbar";
import build from "../../assets/Images/footer/build.webp";
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
const UIUX = ()=>{
    const enhanceDesign = [
        {id:1,title:"Innovative Approach",content:"With expertise in design principles, we craft immersive user experiences, ensuring seamless usability and accessibility.",img:build},
        {id:2,title:"Adaptability",content:"Creating responsive designs is our forte! Our skilled designers develop visual elements that adapt perfectly to various screen sizes, ensuring consistency.",img:build},
        {id:3,title:"Personalization",content:"We implement tailored strategies to deliver customized solutions. Our team focuses on creating designs that merge flexibility, user convenience, and a superior experience.",img:build},
    ]
    const offer = [
        {id:1,content:"UI design & development tailored for desktop and mobile platforms."},
        {id:2,content:"Dynamic and responsive web applications."},
        {id:3,content:"Exceptional UI/UX experiences that captivate users."},
        {id:4,content:"Visually appealing and functional UI designs."},
        {id:5,content:"Comprehensive prototypes and wireframing services."},
        {id:6,content:"Flexible, user-centric models designed to meet diverse business needs."},
    ]
    const dedicatedTeam = [
        {id:1,content:"Extensive knowledge and vast experience in UI/UX design."},
        {id:2,content:"Seamless and timely delivery of UI/UX designs."},
        {id:3,content:"On-demand UX support tailored to your needs."},
    ]
    const methodology = [
        {
            id:1,
            title:"Requirements Gathering",
            content:"We conduct an in-depth analysis of project requirements, merging research insights with design aesthetics. This ensures we fully understand user needs before initiating the design process.",
            img:build
        },
        {
            id:2,
            title:"Prototypes",
            content:"Our experts translate project specifications into wireframes, building a robust framework to deliver captivating design solutions.",
            img:build
        },
        {
            id:3,
            title:"Design",
            content:"Using the wireframes as a blueprint, our UI/UX designers craft user interfaces with a focus on functionality and seamless interactions. Special attention is given to content layout and intuitive navigation to deliver a superior user experience.",
            img:build
        },

    ]
    return(
        <div className="py-24">
            <div className="container">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-3/12">
                        <h1 className="font-Heading text-xl">Services</h1>
                        <ul className="pl-0">
                            {Services.map((items) =>(
                                <li className="cursor-pointer font-ContentText pt-2 text-[15px] text-slate-600 text-justify" onClick={()=>moveServicePage(items.to)}>{items.service}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-9/12 border-l-2 border-darkblue pl-2 md:pl-6">
                        <h1 className="font-Heading text-xl md:text-[28px]">
                            Crafting exceptional experiences.
                        </h1>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">
                        TejusDigi employs innovative strategies to conceptualize and create user interfaces that align with 
                        your vision across diverse platforms. Combining technical expertise with aesthetic finesse, we deliver 
                        designs that prioritize functionality and elevate user experiences.
                        </p>
                    </div>
                </div>
                <div className="my-10">
                    <h1 className="font-Heading text-xl md:text-[28px]">Enhancing design efficiency</h1>
                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify">Translate those ideas into awesome UI/UX that fits right into the front end.</p>
                </div>
                <div className="w-full border-l-2 border-darkblue pl-2 md:pl-6 my-5">
                    {
                        enhanceDesign.map(({id,title,content,img})=>(
                            <div key={id} className="flex items-center py-3 gap-5">
                                <div className="w-32 rounded-full bg-gray-200 p-5">
                                    <img className="w-full object-cover" src={img} alt="" />
                                </div>
                                <div className="w-8/12">
                                    <h1 className="font-Heading text-xl md:text-[28px] py-2">{title}</h1>
                                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">{content}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="my-10">
                    <h1 className="font-Heading text-xl md:text-[28px] py-5">What TejusDigi Offers?</h1>
                    <div>
                        {
                            offer.map(({id,content})=>(
                                <div key={id} className="flex items-center gap-2">
                                    <div className="text-gray-500"><FaRegCircleCheck size={20}/></div>
                                    <div><p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">{content}</p></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="py-10 text-center">
                    <h1 className="font-Heading text-xl md:text-[28px] py-2">Our Design Development Methodologies</h1>
                    <Swiper
                        className="w-5/6 mx-auto py-5 relative"
                        modules={[Navigation,Pagination]}
                        navigation={{
                            nextEl:".uxui-next",
                            prevEl:".uxui-prev"
                        }}
                        speed={1000}
                        slidesPerView={1}
                        onSlideChange={(swiper) => {
                            const nextButton = document.querySelector(".uxui-next");
                            const prevButton = document.querySelector(".uxui-prev");
                        
                            // Hide/Show buttons based on the current active slide index
                            if (swiper.isEnd) {
                              nextButton.style.display = "none";
                            } else {
                              nextButton.style.display = "block";
                            }
                        
                            if (swiper.isBeginning) {
                              prevButton.style.display = "none";
                            } else {
                              prevButton.style.display = "block";
                            }
                          }}
                          pagination={{
                            el: ".custom-uxui-pagination",
                            clickable: true,
                            renderBullet: (index, className) => `
                              <span class="${className} font-Heading text-sm md:text-lg text-darkblue mx-1">
                                ${methodology[index].title}
                              </span>
                            `,
                          }}
                    >
                        {
                            methodology.map(({id,title,content,img})=>(
                                <SwiperSlide key={id} className="w-full flex flex-col text-center justify-center items-center">
                                    <div className="w-36 p-5 bg-gray-200 rounded-full">
                                        <img className="w-full object-contain" src={img} alt="methodology" />
                                    </div>
                                    <div>
                                        <h1 className="font-Heading text-xl md:text-[28px] py-5">{title}</h1>
                                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600">{content}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        <button className="uxui-prev bg-gray-200 rounded-full p-5 text-3xl absolute left-0 z-10 top-1/3"><FaArrowLeftLong/></button>
                        <button className="uxui-next bg-gray-200 rounded-full p-5 text-3xl absolute right-0 z-10 top-1/3"><FaArrowRightLong/></button>
                    </Swiper>
                </div>
                <div className="my-10">
                    <h1 className="font-Heading text-xl md:text-[28px] py-5">Dedicated Team</h1>
                    <p className="w-full md:w-11/12 font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2"> With profound expertise in design aesthetics, TejusDigi creates stunning visual elements that offer 
                        exceptional user experiences and intuitive interfaces. Our team utilizes cutting-edge strategies to 
                        transform your unique visions into top-notch web design solutions.</p>
                    <div>
                        {
                            dedicatedTeam.map(({id,content})=>(
                                <div key={id} className="flex items-center gap-2">
                                    <div className="text-gray-500"><FaRegCircleCheck size={20}/></div>
                                    <div><p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">{content}</p></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UIUX;