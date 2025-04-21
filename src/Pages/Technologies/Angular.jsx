import { technologies } from "../../Components/Navbar/ResponsiveNavbar";
import { FaRegCheckCircle } from "react-icons/fa";
const Angular = ()=>{
    const angulardata = [
        {id:1,title:"Enterprise Solution",content:"To achieve business excellence in today’s competitive environment, we utilize AngularJS’ exceptional scalability to create enterprise-grade applications that meet complex business needs. "},
        {id:2,title:"Test-Driven Development",content:"We employ a test-driven approach by utilizing AngularJS’ Document Object Model (DOM) methodology. This improves the testability of applications with complex components and requirements, ensuring that we deliver robust, high-quality applications that meet your expectations."},
        {id:3,title:"Scalable Solutions",content:"TejusDigi focuses on building highly scalable AngularJS applications that can be developed faster with less maintenance costs. With our features being scalable, you can always find something that suits your growing needs. "},
        {id:4,title:"Single Page Application (SPA):",content:"We can create single-page applications (SPA) that provides a better user experience and load dynamic data. These applications offer seamless interactions with shorter loading times and a highly engaging user interface, enhancing customer satisfaction at all levels. Whether it’s building owerful enterprise solutions or delivering dynamic user experiences, TejusDigi ensures that your AngularJS applications are reliable, scalable, and tailored to meet your business needs."},
    ]
    const angularService = [
        {id:1,title:"Interactive Dashboards: ",content:"Build dynamic, real-time dashboards to visualize data efficiently and engage users with insightful visualizations."},
        {id:2,title:"Data Analysis: ",content:"Leverage AngularJS for developing solutions that manage large datasets and deliver actionable insights with ease."},
        {id:3,title:"Interactive Single Page Apps Development: ",content:"Develop seamless single-page applications (SPAs) with smooth user interactions, faster load times, and intuitive navigation."},
        {id:4,title:"Learning Platforms: ",content:"Build dynamic, user-friendly educational platforms with features like course management, progress tracking, and interactive content."},
        {id:5,title:"Real-Time & Interactive Maps: ",content:"Create interactive, real-time maps for applications like location tracking, geospatial data visualization, and live updates"},
        {id:6,title:"E-commerce and Social Networking Platforms: ",content:"Develop robust e-commerce solutions and social networking platforms with real-time data processing and a rich user interface."},
        {id:7,title:"Customized AngularJS Development with Server-Side Technologies Support: ",content:"Build tailored AngularJS applications integrated with server-side technologies for full-stack solutions."},
        {id:8,title:"Optimization and Maintenance Support: ",content:"We offer ongoing optimization and maintenance services to ensure your AngularJS applications remain fast, secure, and scalable."},
    ]
    const angularTeam = [
        {id:1,title:"Proven Expertise: ",content:"Our developers are highly experienced in AngularJS and other technologies to deliver top-tier solutions."},
        {id:2,title:"Pre-screened Team Members: ",content:"We select only the best professionals with a proven track record of excellence in AngularJS development."},
        {id:3,title:"Flexibility At Its Best: ",content:"We adapt as per your needs, which enables developing a quality app on time."},
        {id:4,title:"Quick Development: ",content:"We make development very simple and ensure the development process takes less time and the project is completed. "},
        {id:5,title:"24/7 Support: ",content:"Our professionals are ready to help you out with anything and everything to help your app succeed. TejusDigi- with its AngularJS development services ensures that your applications, with the best performance, scalability, and user-friendly UI, are at your disposal, giving you peace of mind."},
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
                            TejusDigi AngularJS Development Services
                        </h1>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">
                            At TejusDigi, we build high-performance, process-oriented web applications that empower 
                            businesses to scale efficiently and leverage the latest AngularJS technologies. With expertise in 
                            AngularJS development, we deliver dynamic, online experiences across web, cloud, and mobile 
                            platforms.
                        </p>
                    </div>
                </div>
                <div className="py-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            angulardata.map(({id,title,content})=>(
                                <div key={id} className="w-full border-l-2 border-darkblue pl-2 md:pl-6 my-5">
                                    <h1 className="font-Heading text-xl md:text-[28px]">
                                        {title}
                                    </h1>
                                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">
                                        {content}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="py-5">
                        <h1 className="font-Heading text-xl md:text-[28px] py-5">Application Integration</h1>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600">
                            At TejusDigi, we provide a comprehensive range of AngularJS development services to create 
                            interactive, scalable, and high-performance applications tailored to your business needs.
                        </p>
                {
                        angularService.map(({id,content,title})=>(
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
                    <h1 className="font-Heading text-xl md:text-[28px] py-5">
                        Our Dedicated AngularJS Team
                    </h1>
                    <p className="w-full md:w-11/12font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify">
                        We at TejusDigi use our extensive knowledge and tested practices to build extremely functional and easy-to-use interfaces. Our talented team of AngularJS developers use the AngularJS framework to deliver expressive, scalable, and manageable web applications. AngularJS can be coupled with other relevant technologies, allowing us to provide you with a flexible, testable, and maintainable solution.
                    </p>
                </div>
                <div className="py-5">
                        <h1 className="font-Heading text-xl md:text-[28px] py-5">Why Choose Our AngularJS Team?</h1>
                {
                        angularTeam.map(({id,content,title})=>(
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
            </div>
        </div>
    )
}

export default Angular;