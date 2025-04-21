import { technologies } from "../../Components/Navbar/ResponsiveNavbar";
import { useEffect, useRef } from "react";
import build from "../../assets/Images/footer/build.webp";
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
const IOS = ()=>{
    const swiperRef = useRef(null);

    useEffect(() => {
        const updatePagination = (swiper) => {
            const paginationItems = document.querySelectorAll('.custom-pagination-item');
            paginationItems.forEach((item, index) => {
                if (index === swiper.activeIndex) {
                    item.classList.add('ios-pagination-active');
                    item.classList.remove('ios-pagination');
                } else {
                    item.classList.add('ios-pagination');
                    item.classList.remove('ios-pagination-active');
                }
            });
        };

        if (swiperRef.current) {
            swiperRef.current.swiper.on('slideChange', updatePagination);
            updatePagination(swiperRef.current.swiper); // Initialize on load
        }
    }, []);

    const handlePaginationClick = (index) => {
        swiperRef.current.swiper.slideTo(index);
    };
    const IOSDevelopment = [
        {
            id:1,
            title:"Concept",
            title2:"We Start With a Vision...",
            content:"Every project at TejusDigi starts with a clear vision. Our team collaborates with you to understand the project scope, branding objectives, and specific use cases, ensuring a comprehensive strategy for your iOS app development.",
            img:build
        },
        {
            id:2,
            title:"Design",
            title2:"We Craft User-Centric Designs...",
            content:"Our skilled team of UI/UX designers specializes in developing intuitive and visually stunning interfaces, ensuring your app is functional but also a delight to use.",
            img:build
        },
        {
            id:3,
            title:"Coding",
            title2:"Our Code Brings Ideas to Life...",
            content:"Utilizing powerful technologies like Swift and Objective-C, we transform your app concept into fully functional software, ensuring smooth integration with backend services for a seamless experience.",
            img:build
        },
        {
            id:4,
            title:"Integration",
            title2:"Front-End & Back-End Integration...",
            content:"Our development team seamlessly incorporates    both the front-end and back-end systems, so your app runs smoothly, scales efficiently, and provides a cohesive and responsive user experience.",
            img:build
        },
        {
            id:5,
            title:"Integration",
            title2:"Front-End & Back-End Integration...",
            content:"Our development team seamlessly incorporates both the front-end and back-end systems, so your app runs smoothly, scales efficiently, and provides a cohesive and responsive user experience.",
            img:build
        },
        {
            id:6,
            title:"Testing",
            title2:"Ensuring Quality Every Step of the Way...",
            content:"Before launching, we perform rigorous testing to ensure your app meets high-quality standards. From functionality to user experience, our testing process ensures your app is free of bugs and ready for the App Store",
            img:build
        },
        {
            id:7,
            title:"Deployment",
            title2:"We Make Your App Store-Ready...",
            content:"Our experts guide your app through the final steps of deployment, including configuration, profile creation, and listing setup, ensuring that your app is successfully launched on the App Store and ready for users.",
            img:build
        },
        {
            id:8,
            title:"Support",
            title2:"Continuous Support After Launch...",
            content:"TejusDigi provides comprehensive post-launch support to maintain and upgrade your app, including bug fixes, performance improvements, and updates, ensuring your app stays relevant and competitive in the market.",
            img:build
        },
    ]
    const countOn = [
        {id:1,title:"Architectural Patterns",content:"REST API/JSON, SOAP, and Microservices architecture"},
        {id:2,title:"Server Side",content:"Node.js, Ruby on Rails, Python, PHP, .NET, and Java"},
        {id:3,title:"Cloud Platforms",content:"Google Cloud Platform, Microsoft Azure, and Amazon AWS"},
        {id:4,title:"Components & Frameworks",content:"Cocos2d, OpenGL ES, Unity3D, Payment Systems, Cocoa/Cocoa Touch"},
        {id:5,title:"ORMs",content:"Realm, SQLite.NET, fmdb, RestKit, and Core Data"},
        {id:6,title:"Development Languages",content:"JavaScript, Swift, React Native, Kotlin, and Objective-C"},
        {id:7,title:"Tools Set",content:"TestFlight, Wikitude, RedLazer API, HockeyApp, Universal Analytics, Twilio, and ShareKit"},
    ]
    const businessIOSApp = [
        {id:1,content:"Business iOS Applications"},
        {id:2,content:"Travel & Mapping Applications"},
        {id:3,content:"E-commerce iOS Applications"},
        {id:4,content:"iOS Multimedia Applications Development"},
        {id:5,content:"Customized iOS Application Development"},
        {id:6,content:"Entertainment iOS Apps Development"},
        {id:7,content:"E-Publishing iOS Applications"},
        {id:8,content:"Phone Theme, Mock, and Icon Design Services"},
        {id:9,content:"iPhone Web Service Integration for Seamless Connectivity"},
        {id:10,content:"iOS Apps for iWatch"},
    ]
    return(
        <div className="py-24">
            <div className="container">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-3/12">
                        <h1 className="font-Heading text-xl">Technologies</h1>
                        <ul className="pl-0">
                            {technologies.map((items) =>(
                                <li className="cursor-pointer font-ContentText pt-2 text-[15px] text-slate-600 text-justify" onClick={()=>moveServicePage(items.to)}>{items.tech}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-9/12 border-l-2 border-darkblue pl-2 md:pl-6">
                        <h1 className="font-Heading text-xl md:text-[28px]">
                            We Have Extensive Experience in Delivering iOS Applications.
                        </h1>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">
                            We leverage the latest technologies at TejusDigi to build robust iOS applications that provide a 
                            seamless user experience on the most popular devices in the world — Apple. We have developed
                            successful solutions for them all, drawing on our robust iOS app development experience across the 
                            spectrum of industries for domain-specific solutions. Equip your app with the latest features by 
                            engaging the best iOS development team and remaining ahead in the competitive marketplace.
                        </p>
                    </div>
                </div>
                <div className="py-10">
                    <h1 className="font-Heading text-xl md:text-[28px]">
                        Our Process for Delivering iOS Application Development
                     </h1>
                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-5">
                        We believe in using advanced technologies for the iOS app development process and that is the 
                        reason why we have a quick process without any quality compromise at TejusDigi. Our methodology 
                        is centered on the entire lifecycle of an app, from concept to deployment, creating a user
                        experience and outcome that is unparalleled. This helps us to maintain a balance between business 
                        and user goals at every level of our architectural planning, performing continuous testing for quality 
                        while adopting agile practices that contribute towards a strong iOS app.
                    </p>
                </div>
                <div className="py-5 text-center">
                        {/* Custom Tailwind CSS Pagination */}
                        <div className="custom-pagination mt-5 flex justify-center space-x-2">
                        {
                    IOSDevelopment.map((item, index) => (
                        <button
                            key={index}
                            className="custom-pagination-item px-4 py-2 rounded bg-gray-200 text-gray-600 cursor-pointer"
                            onClick={() => handlePaginationClick(index)}
                        >
                            {item.title}
                        </button>
                    ))
                }
            </div>
            <Swiper
                ref={swiperRef}
                className="w-5/6 mx-auto relative"
                modules={[Navigation]}
                navigation={{
                    nextEl: ".ios-next",
                    prevEl: ".ios-prev"
                }}
                speed={1000}
                slidesPerView={1}
                onSlideChange={(swiper) => {
                    const nextButton = document.querySelector(".ios-next");
                    const prevButton = document.querySelector(".ios-prev");
                
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
            >
                {
                    IOSDevelopment.map(({ id, title, title2, content, img }) => (
                        <SwiperSlide key={id} className="w-full flex flex-col text-center justify-center items-center">
                            <div className="py-5">
                                <h1 className="font-Heading text-xl md:text-[28px] py-5">{title}</h1>
                            </div>
                            <div className="w-36 p-5 bg-gray-200 rounded-full">
                                <img className="w-full object-contain" src={img} alt="methodology" />
                            </div>
                            <div>
                                <h1 className="font-Heading text-xl md:text-[28px] py-5">{title2}</h1>
                                <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600">{content}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
                <button className="ios-prev bg-gray-200 rounded-full p-5 text-3xl absolute left-0 z-10 top-1/2"><FaArrowLeftLong /></button>
                <button className="ios-next bg-gray-200 rounded-full p-5 text-3xl absolute right-0 z-10 top-1/2"><FaArrowRightLong /></button>
                    </Swiper>
                </div>
                <div className="py-5">
                    <h1 className="font-Heading text-xl md:text-[28px]">
                        Our Robust Back-End Systems You Can Rely On
                    </h1>
                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-5">
                        At TejusDigi, we specialize in developing mission-critical iOS applications while providing robust back-end solutions that ensure seamless app performance and scalability. With the expertise of our skilled iOS developers, we deliver powerful back-end support for your application.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          {
                            countOn.map(({id,content,title})=>(
                                <div key={id} className="flex items-start gap-2 py-2 border-l-2 border-darkblue pl-2 md:pl-6">
                                    <div className="pt-1 text-gray-500">
                                        <FaRegCheckCircle size={20}/>
                                    </div>
                                    <div>
                                        <p className="font-Heading text-xl md:text-[18px] w-11/12">{title}</p>
                                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600">
                                            {content}
                                        </p>
                                    </div>
                                </div> 
                            ))
                            }
                    </div>
                </div>
                <div className="py-5">
                    <h1 className="font-Heading text-xl md:text-[28px] py-2">User Interface Design & Prototype</h1>
                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 py-2">
                    At TejusDigi, our app development team ensures that your vision and requirements are perfectly aligned with the application’s final output. We meticulously examine the look and feel of your app on mobile devices before launch, ensuring that every design choice enhances usability and satisfaction. During the entire development process, we consistently seek your feedback to refine and improve the app, ensuring your complete satisfaction at each critical stage.
                    </p>
                </div>
                <div className="py-5">
                    <h1 className="font-Heading text-xl md:text-[28px] py-2">
                        SDK Study
                    </h1>
                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 py-2">
                        Our expert team places great emphasis on continuous growth and staying ahead of the curve. By focusing on agility and adapting to your business needs, we make sure that the app development process aligns with the latest software development kits (SDKs). At TejusDigi, we guarantee that every project is built with the latest technology standards, ensuring enhanced functionality and top-tier performance.
                    </p>
                </div>
                <div className="py-5">
                    <h1 className="font-Heading text-xl md:text-[28px] py-2">
                        Customization from Design to Delivery
                    </h1>
                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 py-2">
                        At TejusDigi, we create tailor-made iOS applications that cater to your unique business needs. Our team works tirelessly to deliver apps that offer real value and exceptional user experiences.
                    </p>
                </div>
                <div>
                    <h1 className="font-Heading text-xl md:text-[28px] py-2">
                        Our iOS Application Development Services
                    </h1>
                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 py-2">
                        At TejusDigi, we create tailor-made iOS applications that cater to your unique business needs. Our team works tirelessly to deliver apps that offer real value and exceptional user experiences.
                    </p>
                    <div>
                        {
                            businessIOSApp.map(({id,content})=>(
                                <div key={id} className="flex items-center gap-3">
                                    <div className="text-gray-500"><FaRegCheckCircle size={20}/></div>
                                    <div className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">{content}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">
                        Our iOS application development services aim to bring your ideas to life with precision and excellence, delivering seamless and scalable solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IOS;