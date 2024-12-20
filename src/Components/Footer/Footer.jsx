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
import Logo from "../../assets/Images/footer/01-Logo-Koncepts.png";


const Footer = ()=>{
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
                        
                        <ul className="w-1/2 md:w-1/4 pl-0">
                            <p className="font-bold text-xl">Services</p>
                            {Services.map((items,index)=>(
                                <li onClick={()=>{moveServicesPages(items.to);window.scrollTo(0,0)}} key={index} className={`${items.id === 2 ? "list-disc text-sm py-1 ml-7":"list-none py-2"} cursor-pointer`}>{items.service}</li>
                            ))}
                        </ul>
                        <ul className="w-1/2 md:w-1/4 pl-0">
                            <p className="font-bold text-xl">Openning</p>
                            {hiringing.map((items,index)=>(
                                <li key={index} onClick={()=>{navigate("/career"); window.scrollTo(0,0)}} className={`${items.id === 2 ? "list-disc text-sm py-1 ml-7":"list-none py-2"} cursor-pointer`}>{items.openning}</li>
                            ))}
                        </ul>
                        <ul className="w-1/2 md:w-1/4 pl-0">
                            <p className="font-bold text-xl">Technologies</p>
                            {technologies.map((items,index)=>(
                                <li key={index} className={`${items.id === 2 ? "list-disc text-sm py-1":"list-none py-2"}`}>{items.tech}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
        <div className="border-t-2">
        <div className="container w-full flex flex-wrap twmt  ">
                <div className="w-full md:w-3/12">
                    <h1 className="text-xl font-bold">INDIA</h1>
                    <p className="w-56">#20 First Street, Sriram Nagar, Achariyapuram, Urivaiyar, (Near Achariya school)
                    Puducherry - 605110</p>
                </div>
                <div className="w-full md:w-6/12">
                    <h1 className="text-xl font-bold">FOLLOW US</h1>
                    <div className="flex gap-2 mx-auto">
                            {SocialMedia.map((items,index)=>(
                                <p key={index} title={items.title} className="sbg rounded-full p-1 transition-all duration-500">{items.platform}</p>
                            ))}
                        </div>

                </div>
                <div className="w-full md:w-auto flex flex-col">
                    <div>
                        <div className=" py-2 rounded-full">
                        <img src={Logo} alt="" width={200} />
                        </div>
                        <span className="block text-sm pt-1">&copy; 2024 Koncepts Design And Development.</span>
                        <span className="text-sm">All rights recieved</span>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Footer;