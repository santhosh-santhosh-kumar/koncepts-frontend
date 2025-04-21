import { FaFacebook, FaInstagram, FaLinkedin, FaRegCheckCircle, FaTwitter, FaYoutube } from "react-icons/fa";
import { Services } from "../../Components/Navbar/ResponsiveNavbar";
import build from "../../assets/Images/footer/build.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const SocialMediaMarketing = ()=>{
    const process = [
        {id:1,title:"Strategy",img:build,content:"We create and execute impactful campaigns across a diverse range of social media platforms to amplify your brand’s presence. Our tailored strategies ensure maximum engagement and results, driving growth for your business."},
        {id:2,title:"Advertising",img:build,content:"We implement comprehensive social media advertising strategies to run targeted campaigns across multiple channels. Focusing on the right audience, we help expand your customer base and drive conversions."},
        {id:3,title:"Monitoring",img:build,content:"TejusDigi uses advanced social media tools to track the performance and engagement of your ad campaigns, ensuring timely and accurate insights. This allows us to optimize strategies for better results."},
        {id:4,title:"Promotion",img:build,content:"We closely monitor your promotions’ reach, traffic, conversions, and engagement, providing you with clear data to visualize and understand your target market. This helps us refine your strategy for optimal performance."},
    ]
    const SMM = [
        {id:1,content:"Strengthens communication with your target audience"},
        {id:2,content:"Boosts brand awareness"},
        {id:3,content:"Builds a strong and recognizable brand identity"},
        {id:4,content:"Increases web traffic"},
        {id:5,content:"Effectively drives conversion rates"},
    ]
    const methodology = [
        {id:1,title:"Plan",content:"It all begins with thorough research! We conduct in-depth research on keywords relevant to your business, integrating them into powerful social media marketing campaigns that deliver measurable results.",img:build},
        {id:2,title:"Content",content:"Our expert designers create engaging and diverse content including infographics, videos, social media visuals, and compelling write-ups to support and promote your online marketing efforts.",img:build},
        {id:3,title:"Blogging",content:"We utilize blogging as a key social media tool to keep your audience informed about recent events, product launches, and all the exciting developments around your brand.",img:build},
        {id:4,title:"Links",content:"Link building is a crucial strategy, we implement to extend your brand reach. By connecting your original content to external sources, we ensure your valuable information reaches the right audience.",img:build},
        {id:5,title:"Monitor",content:"Our digital marketing team leverages advanced social media marketing techniques to measure the success of your campaigns. We track what’s working and refine strategies to maximize brand exposure and growth.",img:build},
    ]
    const socialVerticles = [
        {id:1,img:<FaFacebook/>,title:"facebook",bg:"bg-blue-800"},
        {id:2,img:<FaLinkedin/>,title:"linkedin",bg:"bg-blue-500"},
        {id:3,img:<FaInstagram/>,title:"instagram",bg:"bg-pink-500"},
        {id:4,img:<FaTwitter/>,title:"twitter",bg:"bg-blue-400"},
        {id:4,img:<FaYoutube/>,title:"youtube",bg:"bg-red-500"},
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
                            Expand Your Brand Reach with TejusDigi
                        </h1>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">
                            We harness the power of social media to boost your brand visibility and conversion rates. TejusDigi 
                            crafts unique strategies tailored to your business, ensuring increased engagement and a wider 
                            audience reach. Let us help you elevate your brand on the platforms that matter most.
                        </p>
                    </div>
                </div>
                <div className="my-10">
                    <h1 className="font-Heading text-xl md:text-[28px] text-center py-5">Process</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 py-5 gap-5">
                        {
                            process.map(({id,title,img,content})=>(
                                <div className="w-full md:w-9/12 border-l-2 border-darkblue pl-2 md:pl-6" key={id}>
                                    <h1 className="font-Heading text-xl md:text-[28px] py-2">{title}</h1>
                                    <div className="w-28 bg-gray-200 p-5 rounded-full">
                                        <img className="w-full" src={img} alt="" />
                                    </div>
                                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify">{content}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h1 className="font-Heading text-xl md:text-[28px] py-2">SMM for Achieving Your Business Goals</h1>
                    {
                        SMM.map(({id,content})=>(
                            <div key={id} className="flex items-center gap-2 py-2">
                                <div className="text-gray-500">
                                    <FaRegCheckCircle size={20}/>
                                </div>
                                <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify">{content}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="py-10 text-center">
                    <h1 className="font-Heading text-xl md:text-[28px] py-2">Methodology</h1>
                    <Swiper
                        className="w-5/6 mx-auto py-5 relative"
                        modules={[Navigation,Pagination]}
                        navigation={{
                            nextEl:".social-next",
                            prevEl:".social-prev"
                        }}
                        speed={1000}
                        slidesPerView={1}
                        onSlideChange={(swiper) => {
                            const nextButton = document.querySelector(".social-next");
                            const prevButton = document.querySelector(".social-prev");
                        
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
                            el: ".custom-social-pagination",
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
                        <button className="bg-gray-200 rounded-full p-5 text-3xl social-prev absolute left-0 z-10 top-1/3"><FaArrowLeftLong/></button>
                        <button className="bg-gray-200 rounded-full p-5 text-3xl social-next absolute right-0 z-10 top-1/3"><FaArrowRightLong/></button>
                    </Swiper>
                </div>
                <div>
                    <h1 className="font-Heading text-xl md:text-[28px] py-2">We specialize in the following areas of Social Media Marketing (SMM)...</h1>
                    <div className="flex items-center gap-2 md:gap-10 py-5">
                        {
                            socialVerticles.map(({id,img,title,bg})=>(
                                <div key={id} className="flex flex-col gap-2 md:gap-5">
                                    <div className={`text-xl md:text-4xl lg:text-6xl ${bg} w-fit p-2 md:p-5 text-white rounded-full`}>{img}</div>
                                    <div className="font-Heading text-sm md:text-[28px] text-darkblue">{title}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaMarketing;