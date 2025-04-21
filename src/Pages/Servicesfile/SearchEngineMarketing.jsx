import { FaRegCheckCircle } from "react-icons/fa";
import { Services } from "../../Components/Navbar/ResponsiveNavbar";
import build from "../../assets/Images/footer/build.webp";
const SearchEngineMarketing = ()=>{
    const SEMdata = [
        {id:1,title:"Marketing Strategy",content:"We analyze your business objectives, conversions, and website traffic using advanced web tools to develop a targeted marketing strategy that meets your goals and drives results.",img:build},
        {id:2,title:"Get Indexed",content:"We implement a variety of on-page and on-site SEO techniques, including Meta tags and Meta descriptions, ensuring that your pages are properly indexed by major search engines for better visibility.",img:build},
        {id:3,title:"Tracking & Tuning",content:"Our team leverages modern analytics tools to closely track your online marketing campaigns, optimizing strategies to drive higher conversion rates and revenue for your business.",img:build},
    ]
    const goals = [
        {id:1,title:"Improve page visibility"},
        {id:2,title:"Optimize web pages for better performance"},
        {id:3,title:"Drive more web traffic through targeted Ad campaigns"},
        {id:4,title:"Generate relevant keywords to enhance campaign effectiveness"},
        {id:5,title:"Monitor Google Ads and other ad campaigns"},
        {id:6,title:"Attract a more targeted audience"},
        {id:7,title:"Provide detailed campaign reports to measure success and make data-driven decisions"},
    ]
    return(
        <div className="pt-24">
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
                            Generate More Leads with Our Strategic SEM Approach
                        </h1>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">
                            At TejusDigi, we combine technology, creativity, and data-driven strategies to enhance your search 
                            engine marketing efforts, boosting your visibility in the ever-evolving digital landscape.
                        </p>
                    </div>
                </div>
                <div className="my-10">
                    {
                        SEMdata.map(({id,img,title,content})=>(
                            <div key={id} className="w-full md:w-9/12 border-l-2 border-darkblue pl-2 md:pl-6">
                                <div className="flex items-center gap-3 py-5">
                                    <div className="w-40 bg-gray-200 p-5 rounded-full">
                                        <img className="w-full object-contain" src={img} alt="" />
                                    </div>
                                    <div>
                                        <h1 className="font-Heading text-xl md:text-[28px] py-2">{title}</h1>
                                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">{content}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="my-10">
                    <h1 className="font-Heading text-xl md:text-[28px] py-2">Search Engine Marketing Goals</h1>
                    <div>
                        {
                            goals.map(({id,title})=>(
                                <div key={id} className="flex items-center gap-3">
                                    <div className="text-gray-500"><FaRegCheckCircle size={20}/></div>
                                    <div className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">{title}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchEngineMarketing;