import { technologies } from "../../Components/Navbar/ResponsiveNavbar";
import { FaRegCheckCircle } from "react-icons/fa";
const dotNetService = [
    {id:1,title:"Microsoft .NET Development",content:"TejusDigi specializes in developing highly scalable and result-oriented .NET applications. We bring your software projects to life by conceptualizing and turning them into reality. Our team ensures that your .NET solution is perfectly aligned with your business objectives, providing a seamless development experience."},
    {id:2,title:"Web Application Development",content:"Our skilled. NET experts utilize the Model-View-Controller (MVC) pattern to develop dynamic, user-friendly, and maintainable web applications. So we also specialize in mobile web development on existing websites, sorry that will fit different platforms and devices."},
    {id:3,title:"Customized .NET Web Application Services",content:"With years of experience in. Built on .NET technology, we offer bespoke web apps that address your specific business objectives and requirements. Our development team helps you deliver a high-performing, secure, and reliable .NET solution."},
    {id:4,title:"TejusDigi .NET Application Modernization",content:"Our services are tailored to your specific needs to help you stay relevant, scalable, and competitive in a rapidly changing market by utilizing the latest technologies and industry best practices. Our .NET modernization services are designed to:"}
]
const modernization = [
    {id:1,title:"Mitigate Risk: ",content:"We help mitigate risk through upgrading legacy systems, making sure your applications are secure and stable as well as helping prepare for the future."},
    {id:2,title:"Agility: ",content:"Using modern technology and frameworks we make your application adaptable to changing business requirements and market dynamics."},
    {id:3,title:"Cost Effectiveness: ",content:" We enhance the efficiency of your legacy systems and thereby reduce ongoing maintenance costs."},
    {id:4,title:"Low Disruption: ",content:"Our modernization process is designed for minimal disruption to your ongoing business"},
]
const appIntegration = [
    {id:1,title:"EDI & B2B: ",content:"Implementing electronic data interchange and business-to-business integration "},
    {id:2,title:"Business Process Management: ",content:" We ensure that business processes are in sync so that technology solutions offer value."},
    {id:3,title:"Application Integration: ",content:" Linking your mobile and desktop applications to back-end systems in order to enhance functionality and user experience."},
    {id:4,title:"Business Activity Monitoring: ",content:"This makes sure that you are monitoring the business activities all in real-time and that your systems are top-notch. We also integrate your mobile applications to various platforms like social media like Facebook, Twitter, Instagram, and Tumblr, ensuring your clients enjoy a seamless experience. Our payment gateway integration services ensure a smooth transaction process, meeting customer expectations with enhanced shopping capabilities."},
]

const appReEng = [
    {id:1,title:"Language Migration: ",content:"Moving legacy code to more modern programming languages."},
    {id:2,title:"Legacy Migration: ",content:"Updating older systems and applications to current technology standards."},
    {id:3,title:"Application Migration: ",content:"Seamlessly migrating your applications to new platforms and environments."},
    {id:4,title:"Data & Architecture Migration: ",content:"Modernizing and migrating data storage and system architecture to ensure scalability and reliability."},
]
const DotNet = ()=>{
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
                    </div>
                </div>
                <div className="my-5">
                    <h1 className="font-Heading text-xl md:text-[28px] py-10 text-center">Our .NET Development Services</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        {
                            dotNetService.map(({id,title,content})=>(
                                <div key={id} className="w-full border-l-2 border-darkblue pl-2 md:pl-6">
                                    <h1 className="font-Heading text-xl md:text-[28px]">{title}</h1>
                                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">{content}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                 <div className="my-10">
                    <h1 className="font-Heading text-xl md:text-[28px] py-5">TejusDigi .NET Application Modernization</h1>
                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify">Our services are tailored to your specific needs to help you stay relevant, scalable, and competitive 
                        in a rapidly changing market by utilizing the latest technologies and industry best practices. Our 
                        .NET modernization services are designed to:</p>
                    <div className="py-5">
                        {
                            modernization.map(({id,content,title})=>(
                                <div key={id} className="flex items-start gap-2 py-2">
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
                    <div>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify">
                        TejusDigi’s .NET Modernization services help your organization overcome the limitations of outdated 
                        systems, driving growth, increasing operational efficiency, and ensuring you stay ahead in the digital 
                        landscape.
                        </p>
                    </div>
                </div>
                <div className="py-5">
                    <h1 className="font-Heading text-xl md:text-[28px] py-5">TejusDigi Application Integration & Re-engineering Services</h1>
                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify">At TejusDigi, we offer end-to-end application integration and re-engineering services to help businesses connect their systems and modernize their legacy applications. We have a team that specializes in complex integration needs, ensuring that your software operates more efficiently across multiple platforms.</p>
                </div>
                <div className="py-5">
                    <h1 className="font-Heading text-xl md:text-[28px] py-5">Application Integration</h1>
                    <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600">We offer extensive expertise in integrating diverse applications and systems, ensuring smooth 
                    communication and data flow between various platforms. Our services include:</p>
                    {
                            appIntegration.map(({id,content,title})=>(
                                <div key={id} className="flex items-start gap-2 py-2">
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
                <div className="py-5">
                    <h1 className="font-Heading text-xl md:text-[28px] py-5">Application Integration</h1>
                    <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600">We offer extensive expertise in integrating diverse applications and systems, ensuring smooth 
                    communication and data flow between various platforms. Our services include:</p>
                    {
                            appReEng.map(({id,content,title})=>(
                                <div key={id} className="flex items-start gap-2 py-2">
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
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600">
                            TejusDigi’s re-engineering process utilizes mock testing to validate the need for the migration, 
                            ensuring a smooth and efficient transition. We focus on ensuring that your systems are future-proof, 
                            more efficient, and capable of handling modern demands.
                        </p>
                </div>
            </div>
        </div>
    )
}

export default DotNet;