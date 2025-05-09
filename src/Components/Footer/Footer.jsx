import { NavLink, useNavigate } from "react-router-dom";
import { navlinks } from "../Navbar/Navbar";
import { hiringing, Services, technologies } from "../Navbar/ResponsiveNavbar";
import EmailandQuote from "../Contents/EmailandQuote";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Logo from "../../assets/Images/Logo-TejusDigi.svg";


const Footer = ()=>{
    const date = new Date().getFullYear()
    const navigate = useNavigate();
    const moveServicesPages = (to)=>{
        navigate(to);
        
    }
    const SocialMedia = [
        {id:1,platform:<FaFacebook className="rounded-full" size={20}/>,title:"facebook"},
        {id:2,platform:<AiFillTwitterCircle className="rounded-full" size={20}/>,title:"twitter"},
        {id:3,platform:<TiSocialInstagramCircular className="rounded-full" size={20}/>,title:"instagram"},
        {id:4,platform:<FaLinkedin className="rounded-full" size={20}/>,title:"linkedin"},
        {id:5,platform:<FaPinterest className="rounded-full" size={20}/>,title:"pinterest"},
        {id:6,platform:<FaYoutube className="rounded-full" size={20}/>,title:"youtube"},
    ]
    return(
        <>
        <div>
            <EmailandQuote/>
            <div className="container">
                <div className="mt-3">
                    <div className="flex flex-wrap">
                        <div className="w-1/2 md:w-1/4 my-[45px]">
                        <ul className="pl-0">
                            {navlinks.map((items,index)=>(
                                <li className="py-2 " key={index}>
                                    <NavLink to={items.to} className="links no-underline text-lg text-black" activeClassName="active2" onClick={()=>window.scrollTo(0,0)}>{items.lable}</NavLink>
                                </li>
                            ))}
                        </ul>
                        </div>
                        
                        <ul className="w-1/2 md:w-2/4 pl-0">
                            <p className="text-darkblue font-bold text-xl">Services</p>
                            <div className="flex flex-col md:flex-row">
                                {/* First Section: Services 0 to 4 */}
                            <div className="flex-1">
                                {Services.slice(0, 5).map((items, index) => (
                                    <div key={index} className="">
                                        <li
                                            onClick={() => {
                                                navigate(items.to);
                                                window.scrollTo(0, 0);
                                            }}
                                            className={`${items.to ? "cursor-pointer" : "cursor-default"} list-none py-2`}
                                        >
                                            {items.service}
                                        </li>
                                        {items.sublinks?.map((sublink, subIndex) => (
                                            <li
                                                key={`${index}-${subIndex}`}
                                                onClick={() => {
                                                    navigate(sublink.to);
                                                    window.scrollTo(0, 0);
                                                }}
                                                className="text-sm ml-10 py-1 cursor-pointer list-disc text-gray-600"
                                            >
                                                {sublink.service}
                                            </li>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            {/* Second Section: Services 5 and beyond */}
                            <div className="flex-1">
                                {Services.slice(5).map((items, index) => (
                                    <div key={index} className="">
                                        <li
                                            onClick={() => {
                                                navigate(items.to);
                                                window.scrollTo(0, 0);
                                            }}
                                            className={`${items.to ? "cursor-pointer" : "cursor-default"} list-none py-2`}
                                        >
                                            {items.service}
                                        </li>
                                        {items.sublinks?.map((sublink, subIndex) => (
                                            <li
                                                key={`${index}-${subIndex}`}
                                                onClick={() => {
                                                    navigate(sublink.to);
                                                    window.scrollTo(0, 0);
                                                }}
                                                className="text-sm ml-10 py-1 cursor-pointer list-disc text-gray-600"
                                            >
                                                {sublink.service}
                                            </li>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        </ul>
                        <ul className="w-1/2 md:w-1/4 pl-0">
                            <p className="text-darkblue font-bold text-xl">Technologies</p>
                            {technologies.map((items,index)=>(
                                <li onClick={()=>{navigate(items.to);window.scrollTo(0,0)}} key={index} className={`list-none py-2 cursor-pointer`}>{items.tech}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
        <div className="border-t-2">
        <div className="container w-full flex flex-wrap py-10">
                <div className="w-full md:w-3/12">
                    <h1 className="text-xl font-bold text-darkblue">INDIA</h1>
                    <p className="w-56 py-2">#20 First Street, Sriram Nagar, Achariyapuram, Urivaiyar,<br />(Near Achariya school) <br />
                    Puducherry - 605110</p>
                </div>
                <div className="w-full md:w-6/12">
                    <h1 className="text-xl font-bold text-darkblue">FOLLOW US</h1>
                    <div className="flex py-2 gap-2 mx-auto">
                            {SocialMedia.map((items,index)=>(
                                <p key={index} title={items.title} className="bg-darkblue hover:bg-yellow-400 text-white hover:scale-125 rounded-full p-1 transition-all duration-700 cursor-pointer">{items.platform}</p>
                            ))}
                    </div>
                </div>
                <div className="w-full md:w-auto flex flex-col">
                    <div>
                        <div onClick={()=>{navigate('/');window.scrollTo(0,0)}} className="w-36 cursor-pointer">
                            <img src={Logo} alt="" />
                        </div>
                        <span className="block text-sm pt-1">&copy; {date} TejusDigi All rights reserved.</span>
                        {/* <span className="text-sm"></span> */}
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Footer;