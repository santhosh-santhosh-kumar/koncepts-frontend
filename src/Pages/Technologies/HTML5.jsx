import { technologies } from "../../Components/Navbar/ResponsiveNavbar";
import { FaRegCheckCircle } from "react-icons/fa";
const HTML5 = ()=>{
    const HTML5Services = [
        {id:1,title:"App-like Experience: ",content:"Provide a native app experience within the browser interface for a seamless user experience."},
        {id:2,title:"Cross-Platform Support: ",content:"Our apps work effortlessly across multiple devices and platforms, ensuring compatibility."},
        {id:3,title:"Interactive Navigation: ",content:"Utilize collapsible menus for smooth and user-friendly navigation."},
        {id:4,title:"No App Store Restrictions: ",content:"Enjoy the freedom of developing apps without the limitations of app store guidelines."},
        {id:5,title:"Audio & Video Streaming: ",content:"Easily integrate multimedia streaming support for a rich audio and video experience."},
        {id:6,title:"Audio & Video Streaming: ",content:"Easily integrate multimedia streaming support for a rich audio and video experience."},
        {id:7,title:"Geo-Location Services: ",content:"Leverage the power of geo-location services for apps with location-based functionality."},
        {id:8,title:"High-Resolution Imagery: ",content:"Ensure high-quality imagery that looks great on even small screens."},
        {id:9,title:"No Add-On Requirements: ",content:"Enjoy seamless multimedia streaming with no extra plugins or add-ons required."},
        {id:10,title:"Offline Browsing: ",content:"Access content offline through the built-in online app cache."},
        {id:11,title:"Cost-Effective Development: ",content:"Get high-quality apps at affordable development costs."},
        {id:12,title:"Semantic Code Optimization: ",content:"Improve the semantic value of your webpage with clean, optimized HTML5 code."},
    ]
    const HTML5Team = [
        {id:1,title:"Freedom to Choose Your Team: ",content:"Enjoy the flexibility of selecting your own developers with our pre-screening process."},
        {id:2,title:"Expertise in Third-Party APIs & Libraries: ",content:" Leverage knowledge of third-party integrations to enhance your app’s functionality."},
        {id:3,title:"Full Control Over the Team: ",content:"Have complete autonomy over your team and project workflow"},
        {id:4,title:"Proficiency in Latest HTML5 Technologies: ",content:"Benefit from our deep understanding of modern HTML5 standards and tools."},
        {id:5,title:"Customer-Centric Approach: ",content:"Our team adopts a customer-focused approach to ensure fast project delivery and optimal results."},
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
                            We are dedicated to providing cutting-edge mobile applications.
                        </h1>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">
                            Each project and app that we create at TejusDigi reflects a dedication to helping produce unique 
                            mobile applications that work across different platforms effortlessly. HTML5 mobile app 
                            development is gaining worldwide popularity, and our developers are experts in adopting the latest
                            web technologies to respond to client requirements while being ahead of the industry trends. 
                            Through Rich Internet Applications, We assist organizations in building a fun, stylish, and timely 
                            internet presence using the latest tech Flash and Java FX. Our experts with years of experience 
                            constantly evolve according to the ever-evolving world.
                        </p>
                    </div>
                </div>
                <div className="py-5">
                    <h1 className="font-Heading text-xl md:text-[28px] leading-10">
                        At TejusDigi, we offer a wide range of HTML5 application services to ensure your business stays at 
                        the forefront of web and mobile technology. Our expertise enables us to deliver exceptional, 
                        feature-rich applications that perform seamlessly across various platforms.
                    </h1>
                </div>
                <div className="py-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                            HTML5Services.map(({id,content,title})=>(
                                <div key={id} className="flex items-start gap-2 py-2 border-l-2 border-darkblue pl-2 md:pl-6">
                                    <div className="pt-1 text-gray-500">
                                        <FaRegCheckCircle size={20}/>
                                    </div>
                                    <div>
                                        <p className="font-Heading text-xl md:text-[18px] w-11/12">{title}</p>
                                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600">
                                            {content}
                                        </p>
                                    </div>
                                </div> 
                            ))
                        }
                    </div>
                </div>
                <div className="py-5">
                    <h1 className="font-Heading text-xl md:text-[28px] py-5">Our Dedicated HTML5 Experts</h1>
                    <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600">Save on costs without sacrificing quality by hiring TejusDigi’s dedicated HTML5 app developers.</p>
                    {
                            HTML5Team.map(({id,content,title})=>(
                                <div key={id} className="flex items-start gap-2 py-2">
                                    <div className="pt-1 text-gray-500">
                                        <FaRegCheckCircle size={20}/>
                                    </div>
                                    <div>
                                        <h1 className="font-Heading text-xl md:text-[18px] w-11/12">{title}</h1>
                                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600">
                                            {content}
                                        </p>
                                    </div>
                                </div> 
                            ))
                        }
                </div>
            </div>
        </div>
    )
}

export default HTML5;