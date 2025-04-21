import { Services } from "../../Components/Navbar/ResponsiveNavbar";
import build from "../../assets/Images/footer/build.webp";
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
const BrandIdentity = ()=>{
    const brandIdentity = [
        {
            id:1,
            title:"Explore",
            content:"At TejusDigi, we start by conducting a thorough analysis, gathering data from all available sources. Through collaboration and brainstorming, we immerse ourselves in understanding your business, your audience, and your unique challenges. This raw data is then transformed into insightful digital solutions that lay the foundation for a successful brand strategy.",
            img:build
        },
        {
            id:2,
            title:"Formulate",
            content:"Once we have a clear understanding, our skilled strategists dive into the creative process. We discuss your specific needs, challenges, and opportunities, crafting a detailed game plan for your brand. We present our creative proposals to you, seeking your feedback to ensure that every aspect aligns with your vision. Once the plan is approved, we move ahead with execution, ensuring every detail is perfect.",
            img:build
        },
        {
            id:3,
            title:"Delivery",
            content:"At TejusDigi, we are committed to making your brand a reality. After rigorous testing, we deliver the final materials, ready to make an impact. This is where we launch your unique brand identity into the world. At this stage, you will see clearly how the goals and objectives set in the initial phase have come to life, and how your brand stands distinct in the marketplace.",
            img:build
        },
        {
            id:4,
            title:"Establish",
            content:"Our work goes beyond design - we create an experience. We go deep into what your brand will look, feel, and sound like to the world. Everything is designed to embody the most fundamental principles of your brand and engage with your audience on a deeper level. TejusDigi ensures your brand identity is not just unique, but unforgettable.",
            img:build
        },

    ]
    return(
        <div className="py-24">
            <div className="container">
                <div className="flex flex-col md:flex-row py-5">
                    <div className="w-full md:w-3/12">
                        <h1 className="font-Heading text-xl">Services</h1>
                        <ul className="pl-0">
                            {Services.map((items) =>(
                                <li className="cursor-pointer font-ContentText pt-2 text-[15px] text-slate-600 text-justify" onClick={()=>moveServicePage(items.to)}>{items.service}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-9/12 border-l-2 border-darkblue pl-2 md:pl-6">
                        <h1 className="font-Heading text-xl md:text-[28px]">Building Brands That Stand Out</h1>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">
                            "Can you design a logo?" We were primarily focused on website development, but branding? That 
                            wasn't our forte at the time. Yet, we embraced the challenge and answered, "Yeah, sure!"
                        </p>
                    </div>
                </div>
                <div className="py-5">
                    <h1 className="font-Heading text-xl md:text-[28px]">
                        And that’s how we began building BRANDS that leave a mark.
                    </h1>
                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">
                        Over the years, we have gathered vast experience designing hundreds of logos and brand identities. 
                        We gained enough experience by mid-2016 to legally set up the business.
                    </p>
                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">
                        We serve startups and large organizations and have clients across industries and continents. With 
                        an emphasis on strategic planning and collaboration with our clients, we strive to make the desired 
                        impact on your audience and help define your goals to create impressions that will last. Check out 
                        our brand identity projects and get in touch if you are ready to create a brand that conveys the 
                        spirit of your business.
                    </p>
                </div>
                <div className="py-10 text-center">
                    <h1 className="font-Heading text-xl md:text-[28px] py-2">Developing a Powerful Brand Identity</h1>
                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">
                        We see the brand as a whole, and not limited to one thing or the other, and ensure that your brand 
                        is not just unique but also does well in the market, with TejusDigi. We begin the process of 
                        harnessing great ideas and collaborating with a team of creative designers, strategists, and 
                        developers to mold your distinct brand identity. We act in a clear, adaptable, and client-focused
                        manner. This allows us to establish a solid foundation for your branding, ensuring that every design 
                        is meaningful and aligns with your vision. 
                    </p>
                    <Swiper
                        className="w-5/6 mx-auto py-5 relative"
                        modules={[Navigation,Pagination]}
                        navigation={{
                            nextEl:".brand-next",
                            prevEl:".brand-prev"
                        }}
                        speed={1000}
                        slidesPerView={1}
                        onSlideChange={(swiper) => {
                            const nextButton = document.querySelector(".brand-next");
                            const prevButton = document.querySelector(".brand-prev");
                        
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
                            brandIdentity.map(({id,title,content,img})=>(
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
                        <button className="brand-prev bg-gray-200 rounded-full p-5 text-3xl absolute left-0 z-10 top-1/3"><FaArrowLeftLong/></button>
                        <button className="brand-next bg-gray-200 rounded-full p-5 text-3xl absolute right-0 z-10 top-1/3"><FaArrowRightLong/></button>
                    </Swiper>
                </div>
                <div className="py-5">
                    <h1 className="font-Heading text-xl md:text-[28px] py-5">
                        Are you a brand enthusiast?
                    </h1>
                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600">
                        TejusDigi is a creative and innovative team of brand experts. We all have our own story to tell, but 
                        we do have one thing in common, we love what we do. We don’t design brands, we experience 
                        them in their totality; we know that every detail counts and your identity is what sets you apart, 
                        seriously.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BrandIdentity;