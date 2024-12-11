import { useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import Flowimg1 from "../assets/Images/showcase/amjad.jpg";
import Flowimg2 from "../assets/Images/showcase/jesus.jpg";
import Flowimg5 from "../assets/Images/showcase/nextyours.jpg";
import Flowimg3 from "../assets/Images/showcase/team16.jpg";
import Flowimg4 from "../assets/Images/showcase/theoasispublicschool.jpg";

const PortfolioProject = ()=>{
    const location = useLocation();
    const {id,img,title,detail} = location.state;
    const Portfoliodata = [
        {
          id: 1,
          title: "Build Real Wealth in Real Estate.",
          img: Flowimg1,
          details: "",
          portal:"View Details",
          vision:"View Site",
          site:"https://amjadkhan.co.in/"
        },
        {
          id: 2,
          title: "Jesus Comforts is a prophetic ministry birthed in much prayer, intercession and service to people from all walks of life.",
          img: Flowimg2,
          details: "",
          portal:"View Details",
          vision:"View Site",
          site:"https://jesuscomfortsindia.com/"
        },
        {
          id: 3,
          title: "Team 16 thrive on pairing our love for bright ideas with our roots in distinguished details.",
          img: Flowimg3,
          details: "",
          portal:"View Details",
          vision:"View Site",
          site:"https://team6teen.com/"
        },
        {
          id: 4,
          title: "A professional Educational service provider.",
          img: Flowimg4,
          details: "",
          portal:"View Details",
          vision:"View Site",
          site:"https://theoasispublicschool.com/"
        },
        {
          id: 5,
          title: "",
          img: Flowimg5,
          details: "",
          portal:"View Details",
          vision:"View Site",
          site:" "
        },
        
      ];
    
    useEffect(() => {
        const lenis = new Lenis({
            easing: (t) => t,
            duration:1,  
            direction: 'vertical',
            smooth: true,
            smoothTouch: true,   
            gestureDirection: 'vertical',
            wheelMultiplier: 2.0,  
          });
          function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
          } 
        
          requestAnimationFrame(raf);
        // Cleanup Rellax on component unmount
        return () => {
          lenis.destroy();
        };
      }, []);
      const [page,setPage]=useState(location.state)
      console.log(page)
      const [pageId,setPageId]=useState(id)

      const handlePrevious=(id)=>{
        if(id!==0){
            setPage(...Portfoliodata.filter((value)=>{ return id===value.id}))
            if(pageId>0){
                setPageId(pageId-1)
            }  
    
        }
      }
      const handleNext=(id)=>{
       if(id < Portfoliodata.length){
        setPage(...Portfoliodata.filter((value)=>{ return id===value.id}))
        if(pageId<=Portfoliodata.length){
            setPageId(pageId+1)
        } 
       }
      }
    return(
        <div>
           
        <div className="flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2 bg-white portfolio-white-div top-0 pt-20 px-3">
                <div className="mt-3">
                    <h1 className="font-Heading md:h-40">{page.title}</h1>
                </div>
                <div className="mt-5">
                    <p className="text-justify font-ContentText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores eum beatae ducimus natus hic, corrupti pariatur, earum asperiores totam, rem fugiat placeat magni minus vel ex molestias optio quo? Neque?</p>
                    <p className="text-justify font-ContentText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores eum beatae ducimus natus hic, corrupti pariatur, earum asperiores totam, rem fugiat placeat magni minus vel ex molestias optio quo? Neque?</p>
                </div>
                <div>
                    <p className="">technologies used:</p>
                    <div className="flex justify-around">
                        <div>
                            <span className="block">HTML 5</span>
                            <span className="block">CSS 3</span>
                            <span className="block">Javascript</span>
                        </div>
                        <div>
                            <span className="block">Tailwind CSS</span>
                            <span className="block">React js</span>
                            <span className="block">Node js</span>
                        </div>
                    </div>
                </div>
                <div className="mt-5 w-fit mx-auto group">
                <div className="relative">
                    <div className="bg-darkblue transform translate-x-4 group-hover:translate-x-0 w-40 h-5 transition-all duration-700 "></div>
                    <div className="bg-darkblue transform -translate-x-4 group-hover:-translate-x-0 w-40 h-5 transition-all duration-700"></div>
                    <a href="" className="absolute top-2 left-7"><button className="text-white text-lg ">View Project</button></a>
                </div>
                </div>
                <div className="flex mt-4 justify-center gap-5">
                <p className="border-2 border-darkblue px-3 py-2 rounded-md" onClick={(e)=>handlePrevious(pageId-1)}>Prev</p>
                <p className="border-2 border-darkblue px-3 py-2 rounded-md" onClick={(e)=>handleNext(pageId+1)}>Next</p>
            </div>
            </div>
            <div className="w-full md:w-1/2 h-screen md:h-[160vh] bg-[#fcc900]">
                <div className="mt-60 w-full">
                    <img loading="lazy" src={page.img} className="w-full" alt={detail} title={title}/>
                </div>
            </div>
        </div>
        
        </div>
    )
}
export default PortfolioProject;