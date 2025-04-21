import { Services } from "../../Components/Navbar/ResponsiveNavbar";
import { useNavigate } from "react-router-dom";
const EcommerceDev = ()=>{
    const navigate = useNavigate()
    const moveServicePage = (to)=>{
        navigate(to);
    }
    const ecommercedata = [
        {
            id: 1,
            title: "B2C e-Commerce (Business to Consumer)",
            details1: "B2C eCommerce allows businesses to sell directly to consumers, offering them easy access to a wide range of products and services. Brands like Starbucks and Walmart saw significant growth during the pandemic as online shopping soared.",
            details2: "At TejusDigi Design and Development, we specialize in building dynamic B2C eCommerce platforms that deliver smooth and engaging user experiences, helping you connect with your target customers more effectively."
        },
        {
            id: 2,
            title: "B2B e-Commerce (Business to Business)",
            details1: "B2B eCommerce streamlines transactions between businesses, such as manufacturers and wholesalers, enhancing operational efficiency, expanding market reach, and boosting productivity across industries.",
            details2: "At TejusDigi Design and Development, we offer comprehensive B2B eCommerce solutions designed to optimize your online presence and performance, enabling you to create a scalable platform that drives growth."
        },
        {
            id: 3,
            title: "C2B e-Commerce (Consumer-to-Business)",
            details1: "In the C2B model, individuals provide products or services to businesses, reversing the traditional model. Examples include freelancers and consultants offering their skills online for various projects.",
            details2: "Koncepts Design and Development can assist you in building a C2B platform that effectively connects businesses with individual service providers, increasing opportunities for all involved."
        },
        {
            id: 4,
            title: "C2C e-Commerce (Consumer to Consumer)",
            details1: "C2C e-commerce allows consumers to buy and sell goods among themselves, often through third-party platforms. Popular examples include OLX and eBay, where transactions are facilitated easily.",
            details2: "With TejusDigi Design and Development, you can develop a reliable C2C platform that streamlines consumer transactions, ensuring convenience and a broader customer base for all users."
        },
        {
            id: 5,
            title: "e-Commerce Frontend Design and Development",
            details1: "Frontend design includes the visual elements and interface users engage with, such as layout, typography, and navigation. It is crucial in creating an enjoyable shopping experience for all users.",
            details2: "The skilled frontend team at TejusDigi Design and Development designs visually appealing and responsive interfaces that deliver a seamless experience across all devices for your customers."
        },
        {
            id: 6,
            title: "e-Commerce Backend Design and Development",
            details1: "Backend development focuses on the systems and databases that power the front end, including server management and application logic. This ensures efficient and secure data handling for your platform.",
            details2: "At TejusDigi Design and Development, our dedicated backend team establishes a secure and efficient infrastructure, providing a robust foundation for your e-commerce operations and growth."
        },
        {
            id: 7,
            title: "e-Commerce Web Development Frameworks",
            details1: "An e-commerce framework is essential for building online stores, offering modular components that streamline and enhance development processes. This flexibility caters to various business needs and requirements.",
            details2: "The experts at TejusDigi Design and Development will guide you in selecting the right framework, such as Laravel or React.js, tailored to your operational needs and future growth goals."
        }
    ];
    
    return(
        <div className="py-24">
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
                        <h1 className="font-Heading text-xl md:text-[28px] leading-8 w-11/12">Leading eCommerce Web Design and Development Company in India</h1>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">TejusDigi Design and Development stands as a premier eCommerce web design and development 
                            company in India, specializing in crafting intuitive eCommerce websites and applications. Our skilled 
                            team of developers and designers turns client visions into reality by delivering seamless user 
                            experiences and secure transaction capabilities. As industry leaders, we build custom eCommerce 
                            platforms from the ground up, ensuring scalability, security, and engagement to drive business 
                            growth.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">At TejusDigi Design and Development, we deliver scalable software solutions compatible with any 
operating system, browser, or device. By blending extensive industry expertise with cutting-edge IT 
innovations, we create custom solutions tailored to meet the precise needs of end-users. Our client-centric approach ensures each project aligns with unique goals and expectations.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">We excel in managing diverse eCommerce models, including B2C, B2B, C2B, and C2C platforms. As 
one of India’s top e-commerce service providers, we deliver customized, high-quality solutions that 
boost engagement and drive growth across all e-commerce channels.</p>
                    </div>
                </div>
                <div>
                    <h1 className="font-Heading text-xl md:text-[28px] leading-8 py-10">Different types of eCommerce solutions we offer:</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                       {
                        ecommercedata.map(({id,title,details1,details2}) =>(
                                <div key={id} className="border-l-2 border-darkblue pl-2 md:pl-6 h-fit flex flex-col gap-3">
                                    <div className="">
                                        <h1 className="text-2xl font-Heading pt-2">{title}</h1>
                                    </div>
                                    <div>
                                        <p className="font-ContentText text-[15px] md:text-[17px] text-slate-600 text-justify">{details1}</p>
                                        <p className="font-ContentText text-[15px] md:text-[17px] text-slate-600 text-justify">{details2}</p>
                                    </div>
                                </div>
                        ))
                       } 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EcommerceDev;