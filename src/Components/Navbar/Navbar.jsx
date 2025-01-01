import { useContext, useEffect, useState } from "react";
import TejusDigiLogo from "../../assets/Images/Logo-TejusDigi.svg";
import {Link, NavLink} from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { MenuStateContext } from "../Usecontext/UseContext";
export const navlinks = [
    {
        lable:"Home",
        to:"/"
    },

    {
        lable:"About us",
        to:"/about"
    },

    {
        lable:"Services",
        to:"/services"
    },

    {
        lable:"Portfolio",
        to:"/portfolio"
    },
    // {
    //     lable:"case study",
    //     to:"/casestudy"
    // },

    {
        lable:"Career",
        to:"/career"
    },

    {
        lable:"Contact us",
        to:"/contact"
    },
]
    const Navbar = ()=>{

        const [isScrollingUp, setIsScrollingUp] = useState(true);
        const [lastScrollTop, setLastScrollTop] = useState(0);
      
        useEffect(() => {
          const handleScroll = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
            if (scrollTop > lastScrollTop) {
              setIsScrollingUp(false); // Scrolling down
            } else {
              setIsScrollingUp(true); // Scrolling up
            }
      
            setLastScrollTop(scrollTop);
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up on component unmount
          };
        }, [lastScrollTop]);

        const {MenuState,SetMenuState,HandleMenuState}= useContext(MenuStateContext)
      
        return(
            <>
            <div className={`fixed top-0 w-full ${window.scrollY > 150 ? "bg-white bordershadow":"bg-transparent"} text-darkblue z-40 transition-all duration-500 ${
                            isScrollingUp ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
                <div className="container flex items-center justify-between py-2">
                    {/* logo */}
                    <div className="w-32 shadow-sm shadow-gray-300 rounded-xl">
                        <img src={TejusDigiLogo} alt="" />
                    </div>
                    {/* navbar links */}
                    <div className="hidden md:block">
                        <ul className="flex gap-10">
                            {
                                navlinks.map((items,index)=>(
                                    <li key={index} className="text-lg font-Heading">
                                        <NavLink to={items.to} activeClassName="active2" className="links no-underline text-darkblue">
                                            {items.lable}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* Menu button */}
                    <div onClick={HandleMenuState} className="cursor-pointer">
                        {MenuState ? (""):(<CgMenuRight size={30}/>)}
                    </div>
                   
            </div>
            </div>
             
            </>
            
        )
    }

export default Navbar;