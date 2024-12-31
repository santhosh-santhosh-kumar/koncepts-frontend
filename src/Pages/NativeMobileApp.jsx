import { useNavigate } from "react-router-dom";
import { Services } from "../Components/Navbar/ResponsiveNavbar";
import TypesofApp from "../assets/Images/footer/typesofapp.png";
const NativeMobileApp = ()=>{
    const navigate = useNavigate();
    const moveServicePage = (to)=>{
        navigate(to)
    }
    return(
        <div className="pt-24">
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
                        <h1 className="font-Heading text-xl md:text-[28px] leading-8">Native apps are our preferred choice for cross-platform solutions.</h1>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mt-4">Native mobile apps offer exceptional performance and a high level of reliability. If you aim to impress your customers, choosing native mobile apps is the definitive path forward.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify">Native mobile apps deliver exceptional performance and remarkable reliability. To truly impress your customers, opting for native mobile apps is the best choice.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify">Native mobile apps are high-performance and reliably stable as well, ensuring a smooth user experience. If your goal is to best capture and fascinate consumers, then native mobile apps, which can allow for interaction that is not only seamless but also engaging, are the ultimate way to do that. This sets your brand apart from all the others.</p>
                    </div>
                </div>
                <div className="py-10">
                    <div>
                        <h1 className="font-Heading text-xl md:text-[28px] leading-8">Developing Innovative Mobile Applications</h1>
                        <p className="font-ContentText text-[15px] md:text-[19px] mb-0 py-3 text-slate-600 text-justify">Developing mobile applications shares similarities with web application development, as both stem from traditional software development practices. However, one thing to note is that mobile applications are specifically designed for particular devices and are meant to utilize unique features.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] mb-0 py-3 text-slate-600 text-justify">The development of mobile applications is determined by device class and platform and will involve different environments, programming languages, and development processes. As a result, apps often need to be created individually for each platform. This fragmentation leads to limited code reusability due to the diverse programming interfaces (APIs) across different systems.</p>
                    </div>
                    <div>
                        <h1 className="font-Heading text-xl md:text-[28px] leading-8">Types of mobile app</h1>
                        <img src={TypesofApp} className="w-full h-full py-10" alt="" />
                        <p className="font-ContentText text-[15px] md:text-[19px] mb-0 py-3 text-slate-600 text-justify">During the development process, the first question to address is whether the final product will be a web-based, native, or hybrid mobile application.</p>
                    </div>
                    <div>
                        <h1 className="font-Heading text-xl md:text-[28px] leading-8">Native application</h1>
                        <p className="font-ContentText text-[15px] md:text-[19px] mb-0 py-3 text-slate-600 text-justify">The development of native applications involves using the development tools and APIs that are directly offered by the platform. This implementation is carried out using programming languages that can be executed natively on that specific platform.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] mb-0 py-3 text-slate-600 text-justify">For instance, Java is commonly used for developing Android applications, while Swift is the preferred programming language for iOS applications.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] mb-0 py-3 text-slate-600 text-justify">When developing native applications, developers must possess a deep understanding and extensive experience with the relevant programming language. This expertise allows for the creation of applications that deliver optimal functionality and performance. Additionally, native apps often feature visually stunning user interfaces and intuitive interaction designs, enhancing the overall user experience.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] mb-0 py-3 text-slate-600 text-justify">Native apps are installed directly on the respective device. The distribution of the application is usually via a central point such as the App Store or Google Play. Nowadays, most of the apps available are on a native basis.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NativeMobileApp;