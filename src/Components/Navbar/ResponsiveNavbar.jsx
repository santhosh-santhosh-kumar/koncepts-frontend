import { useContext, useEffect, useState } from "react";
import { MenuStateContext } from "../Usecontext/UseContext";
import { TfiClose } from "react-icons/tfi";
import FacIconLogo from "../../assets/Images/Fav-icon-Logo-TejusDigi.png";
import Logo from "../../assets/Images/Logo-TejusDigi.svg";
import { navlinks } from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";



export const Services = [
    {id:1,service:"Web Development",to:"/web_development"},
    {id:2,service:"Mobile App Development",to:"/mobile_app_development",sublinks:[
        {id:1,service:"Native Apps",to:"/native_apps"},
        {id:2,service:"Cross Platform Application",to:"/cross_platform_application"},
        {id:3,service:"Mobile App Conversion",to:"/mobile_app_conversion"},
        {id:4,service:"Mobile App Re-Engineering",to:"/mobile_app_re_engineering"},
    ]},
    {id:3,service:"E-Commerce Development",to:"/e_commerce_development"},
    {id:4,service:"App.Integration/ Web Service",to:"/app.integration_webServices"},
    {id:5,service:"Requirement Engineering",to:"/requirement_engineering"},
    {id:6,service:"Dedicated Hiring",to:"/dedicated_hiring"},
    {id:7,service:"Digital Marketing",sublinks:[
        {id:1,service:"Search Engine Optimization",to:"/seo"},
        {id:2,service:"Social Media Marketing",to:"/social_media_marketing"},
        {id:3,service:"Search Engine Marketing",to:"/search_engine_marketing"},
        {id:4,service:"Content Marketing",to:"/content_marketing"},
    ]},
    {id:8,service:"UI / UX Design",to:"/uiux"},
    {id:9,service:"Brand Identity",to:"/brand_identity"},
]

export const hiringing = [

]

export const technologies = [
    {id:1,tech:"PHP",to:"/php"},
    {id:2,tech:"DOT NET DEVELOPMENT",to:"/dot_net"},
    {id:3,tech:"ANGULAR JS",to:"angular_js"},
    {id:4,tech:"HTML5",to:"/html5"},
    {id:5,tech:"iOS",to:"/ios"},
    {id:6,tech:"ANDROID",to:"/android"},
    {id:7,tech:"REACT NATIVE",to:"/react_native"},
]

export const SocialMedia = [
    {id:1,platform:<FaFacebook className="rounded-full" size={20}/>,title:"facebook"},
    {id:2,platform:<AiFillTwitterCircle className="rounded-full" size={20}/>,title:"twitter"},
    {id:3,platform:<TiSocialInstagramCircular className="rounded-full" size={20}/>,title:"instagram"},
    {id:4,platform:<FaLinkedin className="rounded-full" size={20}/>,title:"linkedin"},
    {id:5,platform:<FaPinterest className="rounded-full" size={20}/>,title:"pinterest"},
    {id:6,platform:<FaYoutube className="rounded-full" size={20}/>,title:"youtube"},
]

const ResponsiveNavbar = ()=>{
    const navigate = useNavigate();
    const date = new Date().getFullYear()
    const {MenuState,SetMenuState,HandleMenuState} = useContext(MenuStateContext);

    const claculator = window.innerWidth > 760

    const [serviceopen,setserviceopen] = useState(false);
    const [techopen,settechopen] = useState(false);
   
    useEffect(()=>{
        if(window.innerWidth > 760){
            settechopen(true)
            setserviceopen(true)
        }
        else{
            settechopen(false)
            setserviceopen(false)
        }
    },[claculator])

    
    return(
        <>
         <div className={`fixed top-0 w-screen min-h-screen inset-0 left-0 bg-white text-black z-40 transition-all duration-500 ease-in-out ${MenuState ? "-translate-y-0" : "-translate-y-full"} overflow-y-scroll`}>
             {/* header */}
            <div className="bg-darkblue py-2 fixed right-0 left-0 text-darkblue overflow-hidden">
                <div className="container">
                <div className="flex items-center justify-between w-full">
                    <div className="w-24">
                        <Link to={'/'} onClick={()=>{SetMenuState(false);window.scrollTo(0,0)}}>
                            <img src={FacIconLogo} alt="" />
                        </Link>
                    </div>
                    <div onClick={HandleMenuState} className="cursor-pointer text-white">
                        <TfiClose size={30}/>
                    </div>
                   
                </div>
            </div>
            </div>
            {/* body */}
            <div className="container flex flex-wrap mt-28">
                <div className="w-full md:w-1/4">
                <ul className="pl-0 uppercase">
                    {
                        navlinks.map((items,index)=>(
                            <Link onClick={()=>{SetMenuState(false);window.scrollTo(0,0)}} key={index} to={items.to} className="no-underline text-black font-semibold text-xl block py-2">{items.lable}</Link>
                        ))
                    }
                </ul>
                </div>
                <div className="w-full md:w-2/4 overflow-hidden mt-2">
                    <div onClick={()=>setserviceopen(!serviceopen)} className="flex overflow-hidden cursor-pointer">
                        <h3 className="text-xl text-darkblue font-semibold font-ContentText uppercase">Services</h3>
                        <p className="block md:hidden"><MdOutlineKeyboardArrowDown size={30} color="black"/></p>
                    </div>
                    <div className="flex flex-col gap-0 md:gap-10 md:flex-row">
                    <div className={`${serviceopen ? "opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"} border-black transition-all duration-700`}>
                        {Services.slice(0,5).map((items, index) => {
                            return (
                                <div key={index}>
                                    <li onClick={()=>{items.to && navigate(items.to);window.scrollTo(0,0);SetMenuState(false)}} className={`${items.to ? "cursor-pointer" : "cursor-default"} list-none py-2`}>
                                        {items.service}
                                    </li>
                                    {items.sublinks?.map((sublink, subIndex) => (
                                        <li onClick={()=>{navigate(items.to);window.scrollTo(0,0);SetMenuState(false)}} key={`${index}-${subIndex}`} className="text-sm pl-5 py-1 cursor-pointer">{sublink.service}</li>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                    <div className={`${serviceopen ? "opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"} border-black transition-all duration-700`}>
                        {Services.slice(5).map((items, index) => {
                            return (
                                <div key={index}>
                                    <li onClick={()=>{navigate(items.to);window.scrollTo(0,0);SetMenuState(false)}} className={`${items.to ? "cursor-pointer" : "cursor-default"} list-none py-2`}>
                                        {items.service}
                                    </li>
                                    {items.sublinks?.map((sublink, subIndex) => (
                                        <li onClick={()=>{navigate(items.to);window.scrollTo(0,0);SetMenuState(false)}} key={`${index}-${subIndex}`} className="text-sm pl-5 py-1 cursor-pointer">{sublink.service}</li>
                                    ))}
                                </div>
                            );
                        })}
                    </div>

                    </div>
                </div>
                
                <div className="w-full md:w-1/4 overflow-hidden mt-2">
                    <div onClick={()=>settechopen(!techopen)} className="flex overflow-hidden cursor-pointer">
                    <h3 className="text-xl text-darkblue font-semibold font-ContentText uppercase">Technologies</h3>
                    <p className="block md:hidden"><MdOutlineKeyboardArrowDown size={30} color="black"/></p>
                    </div>
                    <div className={`${techopen ?"opacity-100 h-auto" :"opacity-0 h-0 overflow-hidden"} border-black transition-all duration-700`}>
                        {technologies.map((items,index)=>(
                            <li onClick={()=>{navigate(items.to);window.scrollTo(0,0);SetMenuState(false)}} key={index} className={` list-none py-2 cursor-pointer`}>{items.tech}</li>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container w-full flex flex-wrap justify-between twmt">
                <div className="w-full md:w-1/3">
                    <h1 className="text-xl font-bold text-darkblue pb-2">INDIA</h1>
                    <p className="w-56">#20 First Street, Sriram Nagar, Achariyapuram, Urivaiyar, <br /> (Near Achariya school) <br />
                    Puducherry - 605110</p>
                </div>
                <div className="w-full md:w-1/3">
                    <h1 className="text-xl font-bold pb-2 text-darkblue">FOLLOW US</h1>
                    <div className="flex gap-2 mx-auto">
                            {SocialMedia.map((items,index)=>(
                                <p key={index} title={items.title} className="text-white hover:scale-125 rounded-full p-1 transition-all duration-500 hover:bg-yellow-400 bg-darkblue">{items.platform}</p>
                            ))}
                        </div>

                </div>
                <div className="w-full md:w-auto flex flex-col gap-3">
                        <div className="w-32">
                            <img src={Logo} alt="" />
                        </div>
                        <span className="text-sm">&copy; {date} TejusDigi All rights reserved</span>
                </div>
            </div>
        </div>
        </>
       
    )
}
export default ResponsiveNavbar;
