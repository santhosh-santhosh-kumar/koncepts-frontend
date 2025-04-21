import { Services } from "../../Components/Navbar/ResponsiveNavbar";
import { FaRegCheckCircle } from "react-icons/fa";
const DedicatedHiring = ()=>{
    const DedicatedHiring = [
        {
            id:1,
            title:"Streamlined Operations with Dedicated Resources",
            content:"Take full control of your operations with TejusDigi’s dedicated hiring model.",
            content2:"TejusDigi ensures your operations are smooth, efficient, and geared for success.",
            points:[
                {id:1,title:"24/7 Productivity:",content:"Seamlessly implement the “follow the sun” model for continuous progress."},
                {id:2,title:"Operational Flexibility:",content:"Adapt and scale your team effortlessly to meet changing project demands."},
                {id:3,title:"Transparent Processes:",content:"Enjoy total transparency in operations for complete confidence and trust."},
                {id:4,title:"Tailored Solutions:",content:"Customize workflows and resources to align perfectly with your objectives."},
            ]
        },
        {
            id:2,
            title:"Cost-Effective Solutions",
            content:"Partner with TejusDigi to reduce costs without compromising on quality.",
            points:[
                {id:1,title:"Affordable Alternative:",content:"Significant savings compared to in-house team costs."},
                {id:2,title:"Zero Hassle Setup:",content:"No additional costs for establishing an offshore center."},
                {id:3,title:"Transparent Pricing:",content:"Clear cost breakdown, including employee compensation."},
                {id:4,title:"Maximized Savings:",content:"Achieve up to 60% cost savings compared to traditional offshore costs."},
            ]
        },
        {
            id:3,
            title:" 100% Dedicated Team",
            content:"Our dedicated hiring model ensures you have the right talent to drive your success.",
            content2:"Choose TejusDigi for a dedicated hiring experience that blends cost-efficiency with exceptional talent.",
            points:[
                {id:1,title:"Tailored Recruitment:",content:"End-to-end support in hiring candidates that match your exact requirements."},
                {id:2,title:"Specialized Talent:",content:"Access to resources not easily available locally"},
                {id:3,title:"Low Attrition Rates:",content:"Professionals experienced in working with international clients across the UK, US, EU, Middle East, and Australia."},
                {id:4,title:"Innovative Mindset:",content:"Teams motivated to innovate and contribute to your business growth."},
            ]
        },
        {
            id:4,
            title:"Our Trait: Excellence Through People and Processes",
            content:"At TejusDigi, we believe that quality is the result of exceptional talent and streamlined processes. While processes can be implemented, managed, and optimized, it’s the people who make all the difference.",
            content2:"We’ve built a unique hiring model around this principle, delivering outstanding results and driving the success of every project we undertake.",
            points:[
                {id:1,title:"Tailored Talent:",content:"We carefully select resources that align perfectly with your specific requirements."},
                {id:2,title:"Business Understanding:",content:"Our team takes the time to understand your goals and operations for seamless collaboration."},
                {id:3,title:"Clear Communication:",content:"Professionals with excellent communication skills ensure transparency and efficiency."},
                {id:4,title:"Innovative Mindset:",content:"Teams motivated to innovate and contribute to your business growth."},
            ]
        },
    ]
    return(
        <div className="pt-24">
            <div className="container">
                  <div className="flex flex-col md:flex-row py-5">
                        <div className="w-full md:w-3/12">
                            <h1 className="font-Heading text-xl">Services</h1>
                            <ul className="pl-0">
                                {Services.map((items) =>(
                                    <li className="cursor-pointer font-ContentText pt-2 text-[15px] text-slate-600 text-justify" onClick={()=>moveServicePage(items.to)}>{items.service}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full md:w-9/12 border-l-2 border-darkblue pl-2 md:pl-6">
                            <h1 className="font-Heading text-xl md:text-[28px]">Scale Your Business with Tailored Talent Solutions</h1>
                            <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">At TejusDigi, we empower your business with a seamless dedicated hiring experience. With 
                                a transparent approach, and a pool of highly skilled professionals, you can use the tailored 
                                resources you need for your specific project requirements.</p>
                            <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2"> Flexible, agile, and high-performing operations Whatever we do, we do it to achieve flexibility, efficiency, and 
                            excellence in your operations, in all instances, in everything we do.</p>
                        </div>
                    </div>
                    <div className="py-5">
                        <h1 className="font-Heading text-xl md:text-[28px] py-2">Dedicated Hiring: Your Team, Your Way</h1>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">
                            At TejusDigi, with a deep pool of specialist resources available, we can bring highly skilled 
                            professionals with specialized experience to all your development needs. Among the various 
                            outsourcing approaches that have evolved, “Dedicated Hiring” has become a paradigm shift 
                            in recent times. Our dedicated hiring model allows you to choose five-star
                            These professionals work exclusively for you, seamlessly integrating as your own team 
                            members. We facilitate the hiring process by arranging interviews via phone or Skype, 
                            ensuring a smooth interaction and alignment with your goals.
                        </p>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">
                        Though our employees remain legally on our payroll, they operate entirely under your 
                        guidance and management. You gain full control over resource allocation, status reporting, 
                        task monitoring, and performance analysis. This collaborative approach fosters mutual 
                        investment in success, creating a truly synergistic partnership.
                        </p>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">
                        Our straightforward and efficient hiring procedures ensure you get the right team to deliver 
                        exceptional results. Empower your business with TejusDigi’s Dedicated Hiring services and 
                        experience a seamless blend of expertise, transparency, and reliability.
                        </p>
                        
                    </div>
                    <div className="py-5">
                        <h1 className="font-Heading text-xl md:text-[28px] py-2">Build Your Dream Team with Ease</h1>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">
                            At TejusDigi, we follow a simple and efficient process to help you assemble the perfect team 
                            for your project needs. With our streamlined approach, you get access to top-tier 
                            professionals who deliver exceptional results.
                        </p>
                    </div>
                    <div className="py-5">
                        <h1 className="font-Heading text-xl md:text-[28px] py-2">Why Choose TejusDigi for Dedicated Hiring?</h1>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">
                        Our dedicated offshore hiring model provides unmatched advantages, enabling you to create 
                        a high-performing team at remarkably affordable costs. Whether you aim to build, lead, or 
                        scale your operations, our tailored solutions ensure success.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 py-5 gap-5">
                            {
                                DedicatedHiring.map(({id,title,content,content2,points})=>(
                                    <div key={id} className="w-full border-l-2 border-darkblue pl-2 md:pl-6 h-fit">
                                        <h1 className="font-Heading text-xl md:text-[28px] leading-8 w-11/12 py-2">{title}</h1>
                                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600">{content}</p>
                                        {
                                            points.map(({id,title,content})=>(
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
                                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">{content2 ? content2 : ""}</p>           
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-full md:w-9/12 border-l-2 border-darkblue pl-2 md:pl-6 my-5">
                            <h1 className="font-Heading text-xl md:text-[28px]">Our Commitment to Your Success</h1>
                            <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">
                            At TejusDigi, we are dedicated to bridging gaps and fostering collaboration for cross-cultural 
                            success.
                            </p>
                            <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">Cross-Cultural Alignment</p>
                            <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">We work closely with you and your dedicated team to address cultural differences 
                                effectively. With proactive frameworks, we help identify potential issues and guide their 
                                resolution, ensuring a harmonious working relationship.
                            </p>
                    </div>
                    <div className="w-full md:w-9/12 border-l-2 border-darkblue pl-2 md:pl-6 my-5">
                            <h1 className="font-Heading text-xl md:text-[28px]">Effective Communication</h1>
                            <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">
                            We set the foundation for success by aligning expectations from the start. Our process 
                            includes hiring individuals with exceptional communication skills and providing frameworks 
                            that ensure all messages—spoken and unspoken are clearly understood. This minimizes 
                            ambiguity and enhances collaboration.
                            </p>
                    </div>
                    <div className="w-full md:w-9/12 border-l-2 border-darkblue pl-2 md:pl-6 my-5">
                            <h1 className="font-Heading text-xl md:text-[28px]">Hands-Free Management</h1>
                            <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">
                            Maintain full control and management of your dedicated team while we handle the 
                            complexities of offshore operations. Our engagement model allows you to treat and manage 
                            our resources as your own employees. We facilitate introductions to individual team 
                            members, fostering a collaborative and long-term relationship built on trust.
                            </p>
                    </div>
                    <div className="w-full md:w-9/12 border-l-2 border-darkblue pl-2 md:pl-6 my-5">
                            <h1 className="font-Heading text-xl md:text-[28px]">We support you & your business</h1>
                            <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">
                            We are deeply committed to understanding and supporting your business needs. We deliver 
                            an unparalleled level of support and service tailored to suit your needs, no matter if you're a 
                            small business or a large corporation, enabling you to flourish.
                            At TejusDigi, your success is our mission!
                            </p>
                    </div>
            </div>
        </div>
    )
}

export default DedicatedHiring;


{/* <h1 className="font-Heading text-xl md:text-[28px] leading-8 w-11/12 py-2">
                                    Streamlined Operations with Dedicated Resources
                                </h1>
                                 <div className="flex items-start gap-2 py-2">
                                    <div>
                                        <FaRegCheckCircle size={25}/>
                                    </div>
                                    <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600">
                                    Take full control of your operations with TejusDigi’s dedicated hiring model.
                                    24/7 Productivity: Seamlessly implement the “follow the sun” model for continuous progress.
                                    Operational Flexibility: Adapt and scale your team effortlessly to meet changing project 
                                    demands.
                                    </p>
                                </div>
                                <div className="flex items-start gap-2 py-2">
                                    <div>
                                        <FaRegCheckCircle size={25}/>
                                    </div>
                                    <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600">
                                    Transparent Processes: Enjoy total transparency in operations for complete confidence and 
                                    trust.
                                    </p>
                                </div>   */}