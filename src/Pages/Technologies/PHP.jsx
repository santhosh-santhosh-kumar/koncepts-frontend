import { technologies } from "../../Components/Navbar/ResponsiveNavbar";
import build from "../../assets/Images/footer/build.webp";
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
const PHP = ()=>{
    const phpCycle = [
        {
            id:1,
            title:"Custom PHP Development",
            content:"Our team uses the current PHP technologies to create custom solutions for your company that will give you the upper hand over the competition. Our expertise is in building 100 real-time, PHP-based sites from scratch for any use case that you have in mind for your business to cater to accordingly.",
        },
        {
            id:2,
            title:"Integration",
            content:"TejusDigi integrates seamless data and processes into your PHP-based solutions. Our developers employ SOAP and REST APIs to create highly scalable, robust, and user-friendly web applications that align perfectly with your business needs.",
        },
        {
            id:3,
            title:"Customizing Third-party Applications",
            content:"Unlock your business potential by customizing third-party applications. We leverage frameworks like Yii, Zend, Symfony, and CodeIgniter to create custom overrides, ensuring your PHP applications meet all specific requirements while maintaining security and scalability.",
        },
        {
            id:4,
            title:"Application Maintenance & Optimization",
            content:"Our team ensures continuous optimization of your PHP applications to boost performance by 25-100%. We enhance your application's speed and functionality, leading to improved user experiences and better search engine rankings.",
        },
        
    ]
    const phpServices = [
        {id:1,content:"At TejusDigi, our team of expert web developers offers a comprehensive suite of PHP services, tailored to meet the specific needs of your business. We specialize in customizing open-source frameworks and CMS to create solutions that are efficient and scalable."},
        {id:2,content:"UI Development: We offer responsive HTML5 development from PSD, along with proficiency in Smarty, jQuery, JavaScript, JSON, and XML for dynamic, user-friendly interfaces."},
        {id:3,content:"Backend Programming: We focus on building highly available and scalable applications using REST, SOAP, MVC, and ORM-based loosely coupled architectures, ensuring robust functionality and optimal performance."},
        {id:4,content:"Databases/Storage Engines: We integrate a variety of databases and storage solutions, including Memcache, MySQL, and MongoDB, to ensure fast, reliable data handling."},
        {id:5,content:"Methodologies, Tools, and Quality Assurance: Our development process is powered by the latest tools and methodologies like HD Skype, Basecamp, Mantis, GIT, and SVN for seamless communication and project tracking."},
        {id:6,content:"Server Technologies: We provide server-side expertise with Linux, Ubuntu, RedHat, AWS, and Rackspace cloud technologies to ensure your PHP applications run smoothly across various platforms."},
    ]
    const phpExpertise = [
        {
            id:1,
            title:"E-Learning",
            content:"Our expert team at TejusDigi develops custom e-learning platform solutions that provide interactive, engaging, and fully flexible educational experiences. We build optimized e-learning applications that offer an excellent user experience, ensuring seamless learning across social platforms and improving educational outcomes.",
            img:build
        },
        {
            id:2,
            title:"CRM",
            content:"TejusDigi offers advanced CRM software solutions with tailor-made features designed to streamline your customer management processes. Our CRM systems help boost sales, enhance customer relationships, and drive business growth by providing a fully customized solution that aligns with your business objectives and improves customer acquisition.",
            img:build
        },
        {
            id:3,
            title:"APIs for Customized PHP Applications",
            content:"At TejusDigi, we specialize in developing custom APIs that enhance the speed, flexibility, and functionality of your applications. Our custom API solutions allow for seamless integration of advanced features, ensuring your apps are scalable and adaptable to meet the evolving needs of your business.",
            img:build
        },
        {
            id:4,
            title:"Middleware PHP Development",
            content:"Our Middleware PHP application development framework offers a robust, flexible, and scalable solution. With features like error handling, dynamic routing, and dependency injection, we ensure your application runs efficiently while supporting complex business logic and data processing needs.",
            img:build
        },
        {
            id:5,
            title:"Backend Development",
            content:"The backend is the backbone of any application, and at TejusDigi, we either build custom backends from scratch or optimize your existing backend systems. Our solutions focus on achieving faster data retrieval, a smooth content management system, minimal server load, and enhanced navigability for a seamless user experience.",
            img:build
        },
        {
            id:6,
            title:"Backend Development",
            content:"The backend is the backbone of any application, and at TejusDigi, we either build custom backends from scratch or optimize your existing backend systems. Our solutions focus on achieving faster data retrieval, a smooth content management system, minimal server load, and enhanced navigability for a seamless user experience.",
            img:build
        },

    ]
    const API = [
        {id:1,title:"Middleware PHP Development", content:"Our Middleware PHP application development framework offers a robust, flexible, and scalable solution. With features like error handling, dynamic routing, and dependency injection, we ensure your application runs efficiently while supporting complex business logic and data processing needs."},
        {id:2,title:"Backend Development", content:"The backend is the backbone of any application, and at TejusDigi, we either build custom backends from scratch or optimize your existing backend systems. Our solutions focus on achieving faster data retrieval, a smooth content management system, minimal server load, and enhanced navigability for a seamless user experience.",}
    ]
    const phpTech = [
        {id:1,title:"Platforms",content:"Windows, Linux, Solaris, UNIX"},
        {id:2,title:"Servers",content:"IIS, Nginx, Apache, G-Wan, Lighttpd"},
        {id:3,title:"Frameworks/Libraries",content:"CodeIgniter, Zend, CakePHP, Laravel, Drupal, Joomla, Magento, OpenCart, WordPress, OsCommerce, Yii"},
        {id:4,title:"Databases",content:"Oracle, MS SQL, MySQL, Sybase, Ibase, MongoDB, DB2, Access, SQLite, PostgreSQL"},
    ] 
    const phpTeam = [
        {id:1,content:"Full control over the team and seamless business workflow management."},
        {id:2,content:"No hassle, zero-cost offshore center setup."},
        {id:3,content:"Transparency in operations and clear communication throughout the process."},
        {id:4,content:"Timely updates and progress reporting."},
        {id:5,content:"Fully scalable and adaptable development model."},
        {id:6,content:"Comprehensive recruitment support to hire the perfect candidates for your requirements."},
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
                            Empower your business with robust, mission-critical applications.
                        </h1>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">
                            TejusDigi stands out as a leader in delivering exceptional PHP development services. Having 
                            expertise in developing web and mobile applications, we have already accentuated many projects 
                            for worldwide customers. Our experts have ample experience in customizing open-source 
                            applications to fit all your needs so that you never run into issues while surfing through it and 
                            running it.
                        </p>
                        <div className="mt-5">
                            <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">Proven experience in PHP web development.</p>
                            <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">Expertise in customizing open-source solutions.</p>
                            <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">Trusted by clients worldwide for innovative and reliable solutions.</p>
                        </div>
                    </div>
                </div>
                <div className="my-5">
                    <h1 className="font-Heading text-xl md:text-[28px] py-10 text-center">PHP Development Cycle</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        {
                            phpCycle.map(({id,title,content})=>(
                                <div key={id} className="w-full md:w-9/12 border-l-2 border-darkblue pl-2 md:pl-6">
                                    <h1 className="font-Heading text-xl md:text-[28px]">{title}</h1>
                                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">{content}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="py-10 text-center relative">
                    <h1 className="font-Heading text-xl md:text-[28px] py-2">Our Design Development Methodologies</h1>
                    <Swiper
                        className="w-5/6 mx-auto py-5"
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        navigation={{
                            nextEl: ".php-next",
                            prevEl: ".php-prev",
                        }}
                        speed={1000}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2, // When viewport is less than 640px, show 1 slide
                            },
                        }}
                        onSlideChange={(swiper) => {
                            const nextButton = document.querySelector(".php-next");
                            const prevButton = document.querySelector(".php-prev");

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
                        {phpExpertise.map(({ id, title, content, img }) => (
                            <SwiperSlide key={id} className="w-full flex flex-col text-center justify-center items-center">
                                <div className="w-36 p-5 bg-gray-200 rounded-full">
                                    <img className="w-full object-contain" src={img} alt="methodology" />
                                </div>
                                <div>
                                    <h1 className="font-Heading text-xl md:text-[28px] py-5">{title}</h1>
                                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600">{content}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button className="php-prev bg-gray-200 rounded-full p-5 text-3xl absolute left-0 z-10 top-1/3">
                        <FaArrowLeftLong />
                    </button>
                    <button className="php-next bg-gray-200 rounded-full p-5 text-3xl absolute right-0 z-10 top-1/3">
                        <FaArrowRightLong />
                    </button>
                </div>
                <div className="py-5">
                    <h1 className="font-Heading text-xl md:text-[28px] py-5">APIs for Customized PHP Applications</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            API.map(({id,title,content})=>(
                                <div key={id} className="w-full border-l-2 border-darkblue pl-2 md:pl-6 my-5">
                                    <h1 className="font-Heading text-xl md:text-[28px]">
                                        {title}
                                    </h1>
                                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">
                                        {content}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="my-10">
                    <h1 className="font-Heading text-xl md:text-[28px] py-5">PHP Services</h1>
                    <div>
                        {
                            phpServices.map(({id,content})=>(
                                <div key={id} className="flex items-start gap-2 py-2">
                                    <div className="text-gray-500 pt-1"><FaRegCircleCheck size={20}/></div>
                                    <div><p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify">{content}</p></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="py-5">
                    <h1 className="font-Heading text-xl md:text-[28px] py-5">APIs for Customized PHP Applications</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            phpTech.map(({id,title,content})=>(
                                <div key={id} className="w-full md:w-9/12 border-l-2 border-darkblue pl-2 md:pl-6 my-5">
                                    <h1 className="font-Heading text-xl md:text-[28px]">
                                        {title}
                                    </h1>
                                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">
                                        {content}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="my-10">
                    <h1 className="font-Heading text-xl md:text-[28px] py-5">Dedicated PHP Team</h1>
                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify">
                        Hiring dedicated PHP developers at TejusDigi provides the perfect solution for businesses looking to streamline their development process. We ensure faster, more organized, and cost-effective project completion by delivering highly skilled and qualified developers who match your business needs.
                    </p>
                    <div className="py-5">
                        {
                            phpTeam.map(({id,content})=>(
                                <div key={id} className="flex items-start gap-2 py-2">
                                    <div className="text-gray-500 pt-1"><FaRegCircleCheck size={20}/></div>
                                    <div><p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify">{content}</p></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PHP;