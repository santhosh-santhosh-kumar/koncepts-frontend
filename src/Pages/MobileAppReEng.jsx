import { useNavigate } from "react-router-dom";
import { Services } from "../Components/Navbar/ResponsiveNavbar";
import { FaRegCheckCircle } from "react-icons/fa";
const MobileAppReEng = ()=>{
    const navigate = useNavigate();
    const moveServicePage = (to)=>{
        navigate(to)
    }
    const positiveoutcome = [
        {id:1,details:"Flexibility"},
        {id:2,details:"Better Performance"},
        {id:3,details:"Software Maintainability"},
        {id:4,details:"Lower Operational Cost"},
        {id:5,details:"Operational Leadership"},
    ]
    return (
        <div className="py-24">
            <div className="container">
            <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-3/12">
                        <h1 className="font-Heading text-xl">Services</h1>
                        <ul className="pl-0">
                            {Services.map((items) =>(
                                <li className={`${items.id === 2 ? "list-disc text-sm py-1 ml-6":"list-none py-2"} cursor-pointer font-ContentText pt-2 text-[15px] text-slate-600 text-justify`} onClick={()=>moveServicePage(items.to)}>{items.service}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-9/12 border-l-2 border-darkblue pl-2 md:pl-6">
                        <h1 className="font-Heading text-xl md:text-[28px] leading-8">We provide top-quality mobile app re-engineering services.</h1>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">Our Mobile Re-Engineering services serve a broad client spectrum, delivering quicker time to market, increased responsiveness, and streamlined business processes for enhanced operational efficiency.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">By utilizing our extensive expertise in mobile technology, we help companies revamp their mobile apps to exceed client expectations and satisfy evolving customer needs. Each application is optimized for performance, usability, and scalability according to our customized methodology, which helps you maintain the edge in a competitive market while encouraging customer engagement and loyalty.</p>
                    </div>
                </div>
                <div className="py-10">
                    <div className="py-10">
                        <h1 className="font-Heading text-xl md:text-[28px] leading-8">Positive Outcomes of Re-engineering</h1>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">TejusDigi Design and Development’s Mobile Application Re-engineering services empower your 
organization to harness the advantages of cutting-edge technology platforms, frameworks, and 
software products, enabling you to refresh your IT systems and applications through:
</p>
                            {
                                positiveoutcome.map(({id,details})=>(
                                    <div key={id} className="flex items-center gap-3">
                                        <span><FaRegCheckCircle size={25}/></span>
                                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">{details}</p>
                                    </div>
                                ))
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileAppReEng;